import { Contact } from "@/components/contact";
import { Container } from "@/components/container";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { OpenSource } from "@/components/open-source";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { getShowcaseProjects } from "@/lib/github";

export default async function HomePage() {
  const projects = await getShowcaseProjects();

  return (
    <>
      <SiteHeader />
      <main id="content">
        <Hero projectCount={projects.length} />
        <Container>
          <OpenSource projects={projects} />
          <Experience />
          <Skills />
          <Contact />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
