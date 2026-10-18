"use client";

import { useEffect, useId, useRef, useState } from "react";

import { Container } from "@/components/container";

const NAV_ITEMS = [
  { id: "work", href: "#work", label: "Open source" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "stack", href: "#stack", label: "Stack" },
  { id: "contact", href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const nodes = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (node): node is HTMLElement => node !== null,
    );
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((open) => !open);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/75 backdrop-blur-xl">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2">
        <a
          href="#top"
          className="inline-flex items-center py-2 font-mono text-xs tracking-[0.22em] text-foreground"
        >
          ZB
          <span className="sr-only">, Zach Benhamou</span>
        </a>
        <nav
          aria-label="Sections"
          className="order-3 flex w-full gap-x-1 sm:order-none sm:w-auto sm:flex-1 sm:justify-center"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`inline-flex items-center px-2 py-2 text-[13px] transition-colors hover:text-foreground ${
                  isActive
                    ? "text-foreground shadow-[inset_0_-1px_0_0_rgba(237,237,237,0.9)]"
                    : "text-muted"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex items-center gap-2 border border-white/15 px-2.5 py-1.5 text-[12px] text-muted transition-colors hover:text-foreground"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-keyshortcuts="Meta+K Control+K"
        >
          Jump
          <kbd className="font-mono text-[10px] text-foreground/80">K</kbd>
        </button>
      </Container>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="jump-dialog"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setIsOpen(false);
        }}
      >
        <p
          id={titleId}
          className="px-3 pt-2 pb-1 font-mono text-[11px] tracking-[0.16em] text-muted uppercase"
        >
          Jump
        </p>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="flex px-3 py-3 text-sm text-foreground hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </dialog>
    </header>
  );
}
