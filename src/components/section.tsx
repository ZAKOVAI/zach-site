import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  lede?: string;
  children: ReactNode;
}

export function Section({ id, index, title, lede, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 border-t border-white/10 py-14 md:py-16"
    >
      <div className="reveal">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
              {index}
            </p>
            <h2
              id={`${id}-title`}
              className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl"
            >
              {title}
            </h2>
          </div>
          {lede ? (
            <p className="max-w-md text-sm leading-6 text-muted md:text-right">
              {lede}
            </p>
          ) : null}
        </div>
        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  );
}
