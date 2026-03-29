import iconsData from "@/assets/data/icons.json";

const iconsMap = new Map<string, IconData>(
  (iconsData as IconData[]).map((icon) => [icon.iconId, icon]),
);

const getIconSources = (iconId: IconId) => {
  const prefix = `icons/${iconId}`;
  return {
    idleSrc: `${prefix}-idle.svg`,
    activeSrc: `${prefix}-active.svg`,
  };
};

const getBadges = (badges: IconId[]): ResolvedIcon[] =>
  badges
    .map((iconId) => {
      const icon = iconsMap.get(iconId)!;
      return {
        alt: icon.name,
        ...icon,
        ...getIconSources(iconId),
        forceRound: icon.forceRound === true,
      };
    })
    .filter(Boolean);

export { getBadges };
