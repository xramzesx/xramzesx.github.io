import projects from "@/assets/data/projects.json";
import { getBadges } from "./getBadges";

const resolveProjectPath = (projectId: string, path: string) =>
  `projects/${projectId}/${path}`;

const useProjects = (): ResolvedProject[] =>
  (projects as ProjectData[]).map((project) => ({
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
  }));

export { useProjects };
