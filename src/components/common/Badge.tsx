import styled from "styled-components";

type IconSize = "small" | "normal";
type Theme = "light" | "dark";

type BadgeProps = {
  href: string;
  label?: string;
  iconSrc: string;
  iconAlt: string;
  iconForceRound: boolean;
  iconSize: IconSize;
  theme: Theme;
};

const Icon = styled.img<{ $forceRound: boolean; $iconSize: IconSize }>`
  ${({ $iconSize }) => {
    let iconSize = "";

    if ($iconSize === "small") {
      iconSize = "1rem";
    } else {
      iconSize = "1.75rem";
    }

    return `
        width: ${iconSize};
        height: ${iconSize};
    `;
  }};

  ${({ $forceRound }) => ($forceRound ? "border-radius: .25rem;" : "")}
`;

const BadgeLabel = styled.div``;

const BadgeContainer = styled.a<{ $theme: Theme }>`
  user-select: none;

  ${({ $theme }) => {
    if ($theme === "light") {
      return `
            background: #fafafa;
            box-shadow: inset 0 0 0.1rem #e0e0e0;
        `;
    } else {
      return `
            background: #222;    
        `;
    }
  }};
  border-radius: 0.5rem;
  color: white;
  padding: 0.5rem;
  text-decoration: none;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  transition:
    transform 0.1s ease,
    background-color 0.2s ease;

  &:hover {
    ${({ $theme }) => {
      if ($theme === "light") {
        return `
            background: #eaeaea;
            box-shadow: inset 0 0 0.1rem #d0d0d0;
        `;
      } else {
        return `
            background: #333;
        `;
      }
    }};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Badge = ({
  href,
  iconSrc,
  iconAlt,
  label,
  iconForceRound,
  iconSize,
  theme,
}: BadgeProps) => (
  <BadgeContainer href={href} $theme={theme} target="_blank">
    <Icon
      src={iconSrc}
      alt={iconAlt}
      $forceRound={iconForceRound}
      $iconSize={iconSize}
      draggable={false}
    />
    {label ? <BadgeLabel>{label}</BadgeLabel> : null}
  </BadgeContainer>
);

export default Badge;
