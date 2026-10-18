import type { ProjectLink } from "@/types/showcase";

export interface ProjectOverride {
  description?: string;
  language?: string | null;
  license?: string | null;
  links?: readonly ProjectLink[];
}

/**
 * Editorial copy keyed by repository name.
 * When a field is set, it replaces the GitHub value on the card.
 */
export const projectOverrides: Record<string, ProjectOverride> = {
  "grok-cursor-link": {
    description:
      "Let your Grok Bot watch, approve, and drive your Cursor agents from your phone, and keep your Mac awake while they work.",
    language: "macOS",
    license: "MIT",
    links: [
      {
        label: "Bot template",
        href: "https://x.ai/bot/WNOHrJKWnT4kjoUTa5gPD",
      },
    ],
  },
  "prompt-stack": {
    description:
      "An agent skill that turns any request into a four-layer, paste-ready prompt package.",
  },
};
