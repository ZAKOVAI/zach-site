export interface ProjectLink {
  label: string;
  href: string;
}

export interface ShowcaseProject {
  name: string;
  description: string;
  language: string | null;
  license: string | null;
  stars: number | null;
  updatedAt: string | null;
  repoUrl: string;
  homepageUrl: string | null;
  links: ProjectLink[];
}
