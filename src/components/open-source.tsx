import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { getShowcaseProjects } from "@/lib/github";

export async function OpenSource() {
  const projects = await getShowcaseProjects();

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
        <ul
          className={
            projects.length === 1
              ? "grid gap-4"
              : "grid gap-4 md:grid-cols-2"
          }
        >
          {projects.map((project) => (
            <li key={project.name} className="min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
