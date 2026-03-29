/// GENERAL ///

type Theme = "dark" | "light";

/// FROM DATASOURCES ///

type IconId = string;

type IconData = {
  iconId: IconId;
  name: string;
  forceRound?: boolean;
  href: string;
};

type SkillData = {
  title: string;
  badges: IconId[];
};

type ProjectLabel = "web" | "mobile" | "game" | "backend" | "devops" | "school";

type Period = {
  from: string;
  to?: string;
};

type ProjectData = {
  projectId: string;

  name: string;
  description: string;
  period: Period;

  labels: ProjectLabel[];
  stack: IconId[];

  comingSoon?: boolean;
  repoUrl?: string;
  demoUrl?: string;
  logoUrl?: string;
  thumbnailUrl?: string;
};

/// RESOLVED ///

type ResolvedIcon = {
  iconId: IconId;
  activeSrc: string;
  idleSrc: string;
  name: string;
  alt: string;
  forceRound: boolean;
  href: string;
};

type ResolvedSkill = {
  title: string;
  badges: ResolvedIcon[];
};

type ResolvedProject = {
  projectId: string;

  name: string;
  description: string;
  period: Period;

  labels: ProjectLabel[];
  stack: ResolvedIcon[];

  comingSoon: boolean;
  repoUrl?: string;
  demoUrl?: string;
  logoUrl?: string;
  thumbnailUrl?: string;
  featured?: boolean;
};
