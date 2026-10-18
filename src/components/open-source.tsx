import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import type { ShowcaseProject } from "@/types/showcase";

interface OpenSourceProps {
  projects: readonly ShowcaseProject[];
}

export function OpenSource({ projects }: OpenSourceProps) {
  return (
    <Section
      id="work"
      index="01"
      title="Open source"
      lede="Public repositories from ZAKOVAI with the showcase topic. The list refreshes about once an hour."
    >
      {projects.length === 0 ? (
        <p className="text-muted">No public showcase repositories yet.</p>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <li
              key={project.name}
              className={index === 0 ? "min-w-0 md:col-span-2" : "min-w-0"}
            >
              <ProjectCard project={project} featured={index === 0} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
