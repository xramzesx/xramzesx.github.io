import { describe, it, expect } from "vitest";
import icons from "@/assets/data/icons.json";
import skills from "@/assets/data/skills.json";
import projects from "@/assets/data/projects.json";

const validIds = new Set(icons.map((i) => i.iconId));

describe("icon integrity", () => {
  it("all skill badges have valid iconId", () => {
    skills.forEach((section) => {
      section.badges.forEach((id) => {
        expect(validIds.has(id), `Unknown iconId "${id}" in skills`).toBe(true);
      });
    });
  });

  it("all project stack icons have valid iconId", () => {
    projects.forEach((project) => {
      project.stack.forEach((id) => {
        expect(
          validIds.has(id),
          `Unknown iconId "${id}" in project "${project.projectId}"`,
        ).toBe(true);
      });
    });
  });
});
