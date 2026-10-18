import type { ReactNode } from "react";

import { Section } from "@/components/section";
import { skillGroups, type SkillGroup } from "@/data/skills";

const ICONS: Record<SkillGroup["id"], ReactNode> = {
  engineering: (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
      <rect x="1.5" y="1.5" width="5" height="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="9.5" y="1.5" width="5" height="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="1.5" y="9.5" width="5" height="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="9.5" y="9.5" width="5" height="5" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
      <circle cx="8" cy="8" r="1.4" fill="currentColor" />
      <circle cx="3" cy="4" r="1" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="13" cy="4.5" r="1" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="13" r="1" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M3.8 4.6 6.8 7.2M12.2 5.1 9.2 7.2M8 9.4v2.4" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  voice: (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
      <path d="M3 6.5v3M6 4.5v7M8 2.5v11M10 4.5v7M13 6.5v3" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
};

export function Skills() {
  return (
    <Section id="stack" index="03" title="Stack">
      <ul className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <li
            key={group.id}
            className="border border-white/10 bg-white/[0.02] p-6 md:p-7"
          >
            <div className="flex items-center gap-3 text-foreground">
              {ICONS[group.id]}
              <h3 className="text-sm tracking-[-0.01em]">{group.label}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[13px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
