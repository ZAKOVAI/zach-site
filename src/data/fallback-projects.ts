import type { ShowcaseProject } from "@/types/showcase";

/**
 * Used when GitHub returns no showcase repositories or the request fails.
 * Star counts and timestamps are a snapshot. Live data replaces this list
 * once matching repositories exist.
 */
export const fallbackProjects: readonly ShowcaseProject[] = [
  {
    name: "grok-cursor-link",
    description:
      "Let your Grok Bot watch, approve, and drive your Cursor agents from your phone, and keep your Mac awake while they work.",
    language: "macOS",
    license: "MIT",
    stars: 0,
    updatedAt: "2026-10-16T21:42:44Z",
    repoUrl: "https://github.com/ZAKOVAI/grok-cursor-link",
    homepageUrl: null,
    links: [
      {
        label: "Bot template",
        href: "https://x.ai/bot/WNOHrJKWnT4kjoUTa5gPD",
      },
    ],
  },
  {
    name: "prompt-stack",
    description:
      "An agent skill that turns any request into a four-layer, paste-ready prompt package.",
    language: null,
    license: null,
    stars: 0,
    updatedAt: "2026-10-18T17:45:35Z",
    repoUrl: "https://github.com/ZAKOVAI/prompt-stack",
    homepageUrl: null,
    links: [],
  },
];
