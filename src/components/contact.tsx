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
import { displayUrl } from "@/lib/format";

interface ContactLink {
  label: string;
  href: string;
  value: string;
  external: boolean;
  rel: string;
}

export function Contact() {
  const links: ContactLink[] = [
    {
      label: "GitHub",
      href: GITHUB_URL,
      value: displayUrl(GITHUB_URL),
      external: true,
      rel: "me noopener noreferrer",
    },
  ];

  if (isConfiguredUrl(LINKEDIN_URL)) {
    links.push({
      label: "LinkedIn",
      href: LINKEDIN_URL,
      value: displayUrl(LINKEDIN_URL),
      external: true,
      rel: "me noopener noreferrer",
    });
  }

  if (isConfiguredUrl(ZAKOV_AI_URL)) {
    links.push({
      label: "Zakov AI on LinkedIn",
      href: ZAKOV_AI_URL,
      value: displayUrl(ZAKOV_AI_URL),
      external: true,
      rel: "noopener noreferrer",
    });
  }

  if (isConfiguredEmail(EMAIL)) {
    links.push({
      label: "Email",
      href: `mailto:${EMAIL.trim()}`,
      value: EMAIL.trim(),
      external: false,
      rel: "noopener noreferrer",
    });
  }

  return (
    <Section
      id="contact"
      index="04"
      title="Contact"
      lede="For product work, open source, and roles."
    >
      <ul className="border-t border-white/10">
        {links.map((link) => (
          <li key={link.label} className="border-b border-white/10">
            {link.external ? (
              <ExternalLink
                href={link.href}
                rel={link.rel}
                className="flex items-baseline justify-between gap-6 py-5 transition-colors hover:text-white"
              >
                <span className="text-lg">{link.label}</span>
                <span className="truncate font-mono text-[11px] tracking-[0.04em] text-muted">
                  {link.value}
                </span>
              </ExternalLink>
            ) : (
              <a
                href={link.href}
                className="flex items-baseline justify-between gap-6 py-5 transition-colors hover:text-white"
              >
                <span className="text-lg">{link.label}</span>
                <span className="truncate font-mono text-[11px] tracking-[0.04em] text-muted">
                  {link.value}
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
