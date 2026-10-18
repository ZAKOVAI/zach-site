import { ExternalLink } from "@/components/external-link";
import { Section } from "@/components/section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="border-t border-white/10">
        {experience.map((entry) => (
          <li
            key={`${entry.organization}-${entry.role}`}
            className="grid gap-6 border-b border-white/10 py-8 md:grid-cols-12"
          >
            <p className="font-mono text-[11px] tracking-[0.08em] text-muted md:col-span-3">
              {entry.start} to {entry.end}
            </p>
            <div className="md:col-span-9">
              <h3 className="text-xl font-medium tracking-[-0.02em]">
                {entry.role},{" "}
                {entry.organizationUrl ? (
                  <ExternalLink
                    href={entry.organizationUrl}
                    className="underline decoration-white/25 underline-offset-4 hover:decoration-white"
                  >
                    {entry.organization}
                  </ExternalLink>
                ) : (
                  entry.organization
                )}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {entry.legalEntity}
                <span aria-hidden="true"> · </span>
                <span className="sr-only">, </span>
                {entry.location}
              </p>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-foreground/90">
                {entry.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
