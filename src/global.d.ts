type IconId = string;

/// FROM DATASOURCES ///

type IconData = {
  iconId: IconId;
  name: string;
};

type BadgeData = {
  iconId: string;
  href: string;
};

type SkillData = {
  title: string;
  badges: BadgeData[];
};

type ProjectData = {
  projectId: string;

  name: string;
  category: string;
  description: string;
  stack: BadgeData[];

  logoUrl?: string;
  logoAlt?: string;

  repoUrl?: string;
  demoUrl?: string;
};

/// RESOLVED ///

type ResolvedIcon = {
  iconId: IconId;
  activeSrc: string;
  idleSrc: string;
  name: string;
  alt: string;
};

type ResolvedBadge = {
  icon: ResolvedIcon;
  href: string;
};

type ResolvedSkill = {
  title: string;
  badges: ResolvedBadge[];
};
