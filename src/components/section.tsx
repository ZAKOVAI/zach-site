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
      className="scroll-mt-24 border-t border-white/10 py-20 md:py-28"
    >
      <div className="reveal grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
            {index}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 text-2xl font-medium tracking-[-0.03em]"
          >
            {title}
          </h2>
        </div>
        <div className="md:col-span-9">
          {lede ? (
            <p className="max-w-xl text-base leading-7 text-muted">{lede}</p>
          ) : null}
          <div className={lede ? "mt-10" : undefined}>{children}</div>
        </div>
      </div>
    </section>
  );
}
