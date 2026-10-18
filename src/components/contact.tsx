import { ExternalLink } from "@/components/external-link";
import { Section } from "@/components/section";
import {
  EMAIL,
  GITHUB_URL,
  isConfiguredEmail,
  isConfiguredUrl,
  LINKEDIN_URL,
  ZAKOV_AI_URL,
} from "@/data/site";

interface ContactLink {
  label: string;
  href: string;
  external: boolean;
  rel: string;
}

export function Contact() {
  const links: ContactLink[] = [
    {
      label: "GitHub",
      href: GITHUB_URL,
      external: true,
      rel: "me noopener noreferrer",
    },
  ];

  if (isConfiguredUrl(LINKEDIN_URL)) {
    links.push({
      label: "LinkedIn",
      href: LINKEDIN_URL,
      external: true,
      rel: "me noopener noreferrer",
    });
  }

  if (isConfiguredUrl(ZAKOV_AI_URL)) {
    links.push({
      label: "Zakov AI on LinkedIn",
      href: ZAKOV_AI_URL,
      external: true,
      rel: "noopener noreferrer",
    });
  }

  if (isConfiguredEmail(EMAIL)) {
    links.push({
      label: "Email",
      href: `mailto:${EMAIL.trim()}`,
      external: false,
      rel: "noopener noreferrer",
    });
  }

  return (
    <Section
      id="contact"
      index="04"
      title="Let's build something."
      lede="For product work, open source, and roles."
    >
      <div className="border border-white/10 bg-white/[0.03] px-6 py-8 md:px-10 md:py-12">
        <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {links.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <ExternalLink
                  href={link.href}
                  rel={link.rel}
                  className="group inline-flex items-center gap-3 border border-white/15 px-4 py-3 text-sm transition-colors hover:border-white/40 hover:bg-white/[0.04]"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="text-muted transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  >
                    ↗
                  </span>
                </ExternalLink>
              ) : (
                <a
                  href={link.href}
                  className="inline-flex items-center gap-3 border border-white/15 px-4 py-3 text-sm transition-colors hover:border-white/40 hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
