import { Contact } from "@/components/contact";
import { Container } from "@/components/container";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { OpenSource } from "@/components/open-source";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="content">
        <Hero />
        <Container>
          <OpenSource />
          <Experience />
          <Skills />
          <Contact />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
