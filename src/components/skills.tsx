import { Section } from "@/components/section";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="stack" index="03" title="Stack">
      <dl className="divide-y divide-white/10 border-y border-white/10">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="grid gap-4 py-6 md:grid-cols-12 md:items-start"
          >
            <dt className="text-sm text-muted md:col-span-4">{group.label}</dt>
            <dd className="md:col-span-8">
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-white/10 px-2.5 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
