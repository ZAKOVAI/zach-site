export interface SkillGroup {
  label: string;
  items: readonly string[];
}

export const skillGroups: readonly SkillGroup[] = [
  {
    label: "Product engineering",
    items: ["Next.js / TypeScript", "Vercel", "Supabase", "Railway"],
  },
  {
    label: "AI",
    items: ["AI agents and LLM tooling", "Cursor workflows"],
  },
  {
    label: "Voice",
    items: ["Twilio / voice"],
  },
];
