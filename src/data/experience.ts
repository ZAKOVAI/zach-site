import { ZAKOV_AI_URL } from "@/data/site";

export interface ExperienceEntry {
  role: string;
  organization: string;
  organizationUrl: string | null;
  legalEntity: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: readonly string[];
}

export const experience: readonly ExperienceEntry[] = [
  {
    role: "Founder",
    organization: "Zakov AI",
    organizationUrl: ZAKOV_AI_URL,
    legalEntity: "ZAKOVAI LLC",
    location: "Miami, FL",
    start: "Jan 2026",
    end: "Present",
    summary:
      "Building AI agents, voice and automation tools for businesses. Shipping open-source developer tools.",
    highlights: [
      "AI agents for local businesses.",
      "Voice and missed-call automation.",
      "Open-source developer tools.",
      "Cursor and agent workflows.",
    ],
  },
];
