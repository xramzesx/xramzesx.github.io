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

const getBadges = (badges: BadgeData[]): ResolvedBadge[] =>
  badges
    .map(({ iconId, href }) => {
      const icon = iconsMap.get(iconId)!;
      return {
        icon: {
          alt: icon.name,
          ...icon,
          ...getIconSources(iconId),
          forceRound: icon.forceRound === true,
        },
        href,
      };
    })
    .filter(Boolean);

export { getBadges };
