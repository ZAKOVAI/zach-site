export interface ExperienceEntry {
  role: string;
  organization: string;
  legalEntity: string;
  location: string;
  /**
   * TODO: refine the start date.
   * Keep the visible value as "TODO" until the real date is ready.
   */
  start: string;
  /**
   * TODO: refine if this role should have an end date.
   */
  end: string;
  summary: string;
}

export const experience: readonly ExperienceEntry[] = [
  {
    role: "Founder",
    organization: "Zakov AI",
    legalEntity: "ZAKOVAI LLC",
    location: "Miami, FL",
    start: "TODO",
    end: "Present",
    summary:
      "Building AI agents, voice and automation tools for businesses. Shipping open-source developer tools.",
  },
];
