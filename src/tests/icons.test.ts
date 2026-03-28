import { describe, it, expect } from "vitest";
import icons from "@/assets/data/icons.json";
import skills from "@/assets/data/skills.json";
import projects from "@/assets/data/projects.json";

const validIds = new Set(icons.map((i) => i.iconId));

describe("icon integrity", () => {
  it("all skill badges have valid iconId", () => {
    const missing: string[] = [];

    skills.forEach((section) => {
      section.badges.forEach((id) => {
        if (!validIds.has(id)) missing.push(`skills: "${id}"`);
      });
    });

    expect(missing, `Missing iconIds:\n${missing.join("\n")}`).toHaveLength(0);
  });

  it("all project stack icons have valid iconId", () => {
    const missing: string[] = [];

    projects.forEach((project) => {
      project.stack.forEach((id) => {
        if (!validIds.has(id))
          missing.push(`project "${project.projectId}": "${id}"`);
      });
    });

    expect(missing, `Missing iconIds:\n${missing.join("\n")}`).toHaveLength(0);
  });
});
