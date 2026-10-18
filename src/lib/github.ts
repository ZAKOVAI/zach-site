import { cacheLife, cacheTag } from "next/cache";

import { fallbackProjects } from "@/data/fallback-projects";
import { projectOverrides } from "@/data/overrides";
import { EXCLUDED_REPOS, GITHUB_LOGIN } from "@/data/site";
import type { ShowcaseProject } from "@/types/showcase";

const SEARCH_URL = "https://api.github.com/search/repositories";
const MAX_PAGES = 5;

interface GitHubRepo {
  name?: string;
  fork?: boolean;
  archived?: boolean;
  private?: boolean;
  description?: string | null;
  html_url?: string;
  homepage?: string | null;
  language?: string | null;
  stargazers_count?: number;
  updated_at?: string;
  topics?: string[];
  owner?: { login?: string };
  license?: { spdx_id?: string | null } | null;
}

interface GitHubSearchResponse {
  total_count: number;
  items: unknown[];
}

const excludedRepos = new Set(
  EXCLUDED_REPOS.map((name) => name.toLowerCase()),
);

export async function getShowcaseProjects(): Promise<ShowcaseProject[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("showcase");

  const remote = await fetchShowcaseRepos();
  if (!remote || remote.length === 0) {
    return fallbackProjects.map(applyOverride);
  }

  return remote.map(applyOverride);
}

async function fetchShowcaseRepos(): Promise<ShowcaseProject[] | null> {
  const headers = new Headers({
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "zach-site",
  });

  const token = process.env.GITHUB_TOKEN?.trim();
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const projects: ShowcaseProject[] = [];
  let page = 1;
  let total = Number.POSITIVE_INFINITY;

  while (page <= MAX_PAGES && projects.length < total) {
    const url = new URL(SEARCH_URL);
    url.searchParams.set(
      "q",
      `user:${GITHUB_LOGIN} topic:showcase fork:false archived:false`,
    );
    url.searchParams.set("sort", "updated");
    url.searchParams.set("order", "desc");
    url.searchParams.set("per_page", "100");
    url.searchParams.set("page", String(page));

    let response: Response;
    try {
      response = await fetch(url, { headers, cache: "no-store" });
    } catch {
      return null;
    }

    if (!response.ok) return page === 1 ? null : projects;

    let body: unknown;
    try {
      body = await response.json();
    } catch {
      return page === 1 ? null : projects;
    }

    if (!isSearchResponse(body)) return page === 1 ? null : projects;

    total = body.total_count;
    for (const item of body.items) {
      if (!isRecord(item)) continue;
      const project = toProject(item as GitHubRepo);
      if (project) projects.push(project);
    }

    if (body.items.length === 0) break;
    page += 1;
  }

  return dedupe(projects);
}

function applyOverride(project: ShowcaseProject): ShowcaseProject {
  const override = projectOverrides[project.name];
  if (!override) return project;

  return {
    ...project,
    description: preferText(override.description, project.description),
    language:
      override.language === undefined ? project.language : override.language,
    license: override.license === undefined ? project.license : override.license,
    links: override.links ? [...override.links] : project.links,
  };
}

function preferText(override: string | undefined, fallback: string): string {
  const next = override?.trim();
  return next ? next : fallback;
}

function toProject(repo: GitHubRepo): ShowcaseProject | null {
  if (!isIncluded(repo) || !repo.name || !repo.html_url) return null;

  const licenseId = repo.license?.spdx_id?.trim();
  const license =
    licenseId && licenseId !== "NOASSERTION" ? licenseId : null;

  return {
    name: repo.name,
    description: repo.description?.trim() ?? "",
    language: repo.language?.trim() || null,
    license,
    stars:
      typeof repo.stargazers_count === "number" ? repo.stargazers_count : null,
    updatedAt: repo.updated_at ?? null,
    repoUrl: repo.html_url,
    homepageUrl: cleanHomepage(repo.homepage),
    links: [],
  };
}

function isIncluded(repo: GitHubRepo): boolean {
  if (!repo.name || !repo.html_url) return false;
  if (repo.private || repo.fork || repo.archived) return false;
  if (repo.owner?.login?.toLowerCase() !== GITHUB_LOGIN.toLowerCase()) {
    return false;
  }
  const topics = Array.isArray(repo.topics) ? repo.topics : [];
  if (!topics.includes("showcase")) return false;
  if (excludedRepos.has(repo.name.toLowerCase())) return false;
  return true;
}

function cleanHomepage(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("https://") || trimmed.startsWith("http://")) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

function dedupe(projects: ShowcaseProject[]): ShowcaseProject[] {
  const seen = new Set<string>();
  const unique: ShowcaseProject[] = [];

  for (const project of projects) {
    if (seen.has(project.name)) continue;
    seen.add(project.name);
    unique.push(project);
  }

  return unique;
}

function isSearchResponse(value: unknown): value is GitHubSearchResponse {
  if (!isRecord(value)) return false;
  return typeof value.total_count === "number" && Array.isArray(value.items);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
