import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  SITE_DESCRIPTION,
  SITE_NAME,
  ZAKOV_AI_URL,
} from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-end overflow-hidden pb-16 pt-16 md:justify-center md:pb-24 md:pt-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <Container>
        <p className="font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
          {LOCATION}
        </p>
        <h1 className="mt-6 max-w-5xl text-[clamp(3.5rem,9vw,7.25rem)] font-medium leading-[0.92] tracking-[-0.045em] text-balance">
          {SITE_NAME}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted md:text-xl md:leading-9">
          <HeroDescription />
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
          <ExternalLink
            href={GITHUB_URL}
            rel="me noopener noreferrer"
            className="inline-flex items-center gap-2 py-2 text-foreground"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </ExternalLink>
          <ExternalLink
            href={LINKEDIN_URL}
            rel="me noopener noreferrer"
            className="inline-flex items-center gap-2 py-2 text-foreground"
          >
            LinkedIn
            <span aria-hidden="true">↗</span>
          </ExternalLink>
          <a href="#contact" className="inline-flex items-center gap-2 py-2">
            Contact
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

function HeroDescription() {
  const company = "Zakov AI";
  const index = SITE_DESCRIPTION.indexOf(company);

  if (index === -1) return SITE_DESCRIPTION;

  return (
    <>
      {SITE_DESCRIPTION.slice(0, index)}
      <ExternalLink
        href={ZAKOV_AI_URL}
        className="text-foreground underline decoration-white/30 underline-offset-4 hover:decoration-white"
      >
        {company}
      </ExternalLink>
      {SITE_DESCRIPTION.slice(index + company.length)}
    </>
  );
}
