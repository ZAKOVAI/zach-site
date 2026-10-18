import type { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  rel?: string;
}

export function ExternalLink({
  href,
  children,
  className,
  rel = "noopener noreferrer",
}: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel={rel} className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
