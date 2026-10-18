import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { experience } from "@/data/experience";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  STATUS_LABEL,
  ZAKOV_AI_URL,
} from "@/data/site";
import { primaryStack } from "@/data/skills";

interface HeroProps {
  projectCount: number;
}

export function Hero({ projectCount }: HeroProps) {
  const role = experience[0];
  const projectLabel = projectCount === 1 ? "project" : "projects";

  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-0 md:pt-20">
      <div aria-hidden="true" className="hero-field pointer-events-none" />
      <div aria-hidden="true" className="dot-field pointer-events-none" />
      <Container className="relative">
        <p className="hero-in inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
          <span
            aria-hidden="true"
            className="status-dot size-1.5 rounded-full bg-foreground"
          />
          {STATUS_LABEL}
        </p>
        <h1 className="hero-in mt-6 max-w-5xl text-[clamp(3.25rem,7.4vw,6.15rem)] font-medium leading-[0.92] tracking-[-0.038em]">
          {SITE_NAME}
        </h1>
        <div className="hero-in mt-6 max-w-xl delay-100">
          <p className="text-lg leading-8 text-foreground/90 md:text-xl md:leading-9">
            <HeroDescription />
          </p>
          <p className="mt-3 text-base leading-7 text-muted">{SITE_TAGLINE}</p>
        </div>
        <div className="hero-in mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm delay-150">
          <ExternalLink
            href={GITHUB_URL}
            rel="me noopener noreferrer"
            className="group inline-flex items-center gap-2 py-2 text-foreground"
          >
            GitHub
            <Arrow />
          </ExternalLink>
          <ExternalLink
            href={LINKEDIN_URL}
            rel="me noopener noreferrer"
            className="group inline-flex items-center gap-2 py-2 text-foreground"
          >
            LinkedIn
            <Arrow />
          </ExternalLink>
          <a href="#contact" className="group inline-flex items-center gap-2 py-2">
            Contact
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
            >
              ↓
            </span>
          </a>
        </div>
        <dl className="mt-12 grid border-t border-white/10 sm:grid-cols-3">
          <Stat
            label="Open source"
            value={String(projectCount)}
            detail={`Public ${projectLabel}`}
          />
          <Stat
            label="Founder since"
            value={role?.start ?? "Jan 2026"}
            detail={role ? `${role.organization}, ${role.location}` : "Zakov AI"}
          />
          <Stat
            label="Primary stack"
            value={primaryStack.name}
            detail={primaryStack.detail}
          />
        </dl>
      </Container>
    </section>
  );
}

function Stat({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="border-b border-white/10 py-5 sm:border-r sm:border-b-0 sm:px-6 sm:py-6 last:border-b-0 sm:last:border-r-0 sm:first:pl-0">
      <dt className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
        {label}
      </dt>
      <dd className="mt-2 text-2xl font-medium tracking-[-0.03em]">{value}</dd>
      <p className="mt-1 text-sm text-muted">{detail}</p>
    </div>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
    >
      ↗
    </span>
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
