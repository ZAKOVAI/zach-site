export interface SkillGroup {
  id: "engineering" | "ai" | "voice";
  label: string;
  items: readonly string[];
}

export const primaryStack = {
  name: "Next.js",
  detail: "TypeScript",
} as const;

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "engineering",
    label: "Product engineering",
    items: ["Next.js / TypeScript", "Vercel", "Supabase", "Railway"],
  },
  {
    id: "ai",
    label: "AI",
    items: ["AI agents and LLM tooling", "Cursor workflows"],
  },
  {
    id: "voice",
    label: "Voice",
    items: ["Twilio / voice"],
  },
];
