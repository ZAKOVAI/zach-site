import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { SITE_NAME, SOURCE_URL } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <Container className="flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {SITE_NAME}
        </p>
        <ExternalLink
          href={SOURCE_URL}
          className="underline decoration-white/25 underline-offset-4 hover:text-foreground hover:decoration-white"
        >
          View source
        </ExternalLink>
      </Container>
    </footer>
  );
}
