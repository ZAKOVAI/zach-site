import { Container } from "@/components/container";

const NAV_ITEMS = [
  { href: "#work", label: "Open source" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
      <Container className="flex flex-col items-start gap-1 py-3 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:py-0">
        <a
          href="#top"
          className="inline-flex items-center py-2 font-mono text-xs tracking-[0.22em] text-foreground"
        >
          ZB
          <span className="sr-only">, Zach Benhamou</span>
        </a>
        <nav aria-label="Sections" className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center py-2 text-[13px] text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
