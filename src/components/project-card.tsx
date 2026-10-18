"use client";

import type { PointerEvent } from "react";

import { ExternalLink } from "@/components/external-link";
import { formatStars, formatUpdated } from "@/lib/format";
import type { ShowcaseProject } from "@/types/showcase";

interface ProjectCardProps {
  project: ShowcaseProject;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const updated = project.updatedAt ? formatUpdated(project.updatedAt) : null;

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--spot-x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--spot-y",
      `${event.clientY - rect.top}px`,
    );
  }

  return (
    <article
      onPointerMove={onPointerMove}
      className={`spotlight group relative flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.025] transition-[transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 focus-within:border-white/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        featured ? "p-7 md:p-10" : "p-6 md:p-8"
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <h3
          className={`font-medium tracking-[-0.03em] ${
            featured ? "text-2xl md:text-4xl" : "text-xl"
          }`}
        >
          <ExternalLink
            href={project.repoUrl}
            className="inline-flex items-center gap-3 py-1 hover:text-white"
          >
            {project.name}
            <span
              aria-hidden="true"
              className="text-base text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
            >
              ↗
            </span>
          </ExternalLink>
        </h3>
      </div>
      {project.description ? (
        <p
          className={`mt-4 max-w-3xl leading-7 text-foreground/90 ${
            featured ? "text-base md:text-lg md:leading-8" : "text-[15px]"
          }`}
        >
          {project.description}
        </p>
      ) : null}
      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.04em] text-muted">
        {project.language ? (
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-foreground/80"
            />
            {project.language}
          </span>
        ) : null}
        {project.license ? <span>{project.license}</span> : null}
        {project.stars === null ? null : <span>{formatStars(project.stars)}</span>}
        {updated ? <span>Updated {updated}</span> : null}
      </div>
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <ExternalLink
          href={project.repoUrl}
          className="inline-flex items-center py-1 underline decoration-white/25 underline-offset-4 hover:decoration-white"
        >
          Repository
        </ExternalLink>
        {project.homepageUrl ? (
          <ExternalLink
            href={project.homepageUrl}
            className="inline-flex items-center py-1 underline decoration-white/25 underline-offset-4 hover:decoration-white"
          >
            Homepage
          </ExternalLink>
        ) : null}
        {project.links.map((link) => (
          <ExternalLink
            key={link.href}
            href={link.href}
            className="inline-flex items-center py-1 underline decoration-white/25 underline-offset-4 hover:decoration-white"
          >
            {link.label}
          </ExternalLink>
        ))}
      </div>
    </article>
  );
}
