import styled from "styled-components";

type BadgeProps = {
  href: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
  iconForceRound: boolean;
};

const Icon = styled.img<{ $forceRound: boolean }>`
  width: 1.75rem;
  height: 1.75rem;
  ${({ $forceRound }) => ($forceRound ? "border-radius: .25rem;" : "")}
`;

const BadgeLabel = styled.div``;

const BadgeContainer = styled.a`
  user-select: none;
  background: #222;
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
    background: #333;
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
}: BadgeProps) => (
  <BadgeContainer href={href} target="_blank">
    <Icon
      src={iconSrc}
      alt={iconAlt}
      $forceRound={iconForceRound}
      draggable={false}
    />
    <BadgeLabel>{label}</BadgeLabel>
  </BadgeContainer>
);

export default Badge;
