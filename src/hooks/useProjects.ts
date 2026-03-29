import projects from "@/assets/data/projects.json";
import order from "@/assets/data/projects/order.json";
import featured from "@/assets/data/projects/featured.json";
import { getBadges } from "./getBadges";

const projectsOrder: Record<string, number> = order.reduce(
  (acc, projectId, index) => ({ ...acc, [projectId]: index }),
  {},
);

const featuredProjectIds = new Set(featured);

const resolveProjectPath = (projectId: string, path: string) =>
  `projects/${projectId}/${path}`;

const useProjects = (): ResolvedProject[] =>
  (projects as ProjectData[])
    .map((project) => ({
      ...project,
      stack: getBadges(project.stack),
      logoUrl:
        project.logoUrl !== undefined
          ? resolveProjectPath(project.projectId, project.logoUrl)
          : undefined,
      thumbnailUrl:
        project.thumbnailUrl !== undefined
          ? resolveProjectPath(project.projectId, project.thumbnailUrl)
          : undefined,
      comingSoon: project.comingSoon === true,
      featured: featuredProjectIds.has(project.projectId),
    }))
    .sort(
      (a: ResolvedProject, b: ResolvedProject) =>
        projectsOrder[a.projectId] - projectsOrder[b.projectId],
    );

export { useProjects };
