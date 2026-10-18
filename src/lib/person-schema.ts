import {
  EMAIL,
  GITHUB_URL,
  isConfiguredEmail,
  isConfiguredUrl,
  LINKEDIN_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/data/site";
import { skillGroups } from "@/data/skills";

export function personSchema() {
  const sameAs = [GITHUB_URL, LINKEDIN_URL].filter(isConfiguredUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    jobTitle: "Founder",
    email: isConfiguredEmail(EMAIL) ? EMAIL : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
    worksFor: {
      "@type": "Organization",
      name: "Zakov AI",
      legalName: "ZAKOVAI LLC",
    },
    knowsAbout: skillGroups.flatMap((group) => group.items),
    sameAs,
  };
}
