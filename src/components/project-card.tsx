import { ExternalLink } from "@/components/external-link";
import { formatStars, formatUpdated } from "@/lib/format";
import type { ShowcaseProject } from "@/types/showcase";

interface ProjectCardProps {
  project: ShowcaseProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const updated = project.updatedAt ? formatUpdated(project.updatedAt) : null;
  const facts = [
    project.language,
    project.license,
    project.stars === null ? null : formatStars(project.stars),
    updated ? `Updated ${updated}` : null,
  ].filter((fact): fact is string => Boolean(fact));

  return (
    <article className="flex h-full flex-col border border-white/10 bg-white/[0.02] p-6 transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04] focus-within:border-white/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-8">
      <h3 className="text-lg font-medium tracking-[-0.02em]">
        <ExternalLink href={project.repoUrl} className="inline-flex py-1 hover:text-white">
          {project.name}
        </ExternalLink>
      </h3>
      {project.description ? (
        <p className="mt-4 text-[15px] leading-7 text-foreground/90">
          {project.description}
        </p>
      ) : null}
      {facts.length > 0 ? (
        <p className="mt-8 font-mono text-[11px] leading-5 tracking-[0.04em] text-muted">
          {facts.join(" · ")}
        </p>
      ) : null}
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
