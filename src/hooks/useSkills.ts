import skillData from "@/assets/data/skills.json";
import { getBadges } from "./getBadges";

const useSkills = (): ResolvedSkill[] =>
  (skillData as SkillData[]).map((skill) => ({
    ...skill,
    badges: getBadges(skill.badges),
  }));

export { useSkills };
