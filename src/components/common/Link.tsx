import styled from "styled-components";

type FontSize = "large" | "normal" | "small";

const Container = styled.a<{ $theme: Theme; $size: FontSize }>`
  font-size: ${({ $size }) => {
    switch ($size) {
      case "large":
        return "1.25rem";
      case "normal":
        return "1rem";
      case "small":
        return ".75rem";
    }
  }};
  text-decoration: none;

  padding: 0.5rem 0.25rem;
  display: inline-flex;
  color: ${({ $theme }) => ($theme == "dark" ? "#000" : "#ddd")};
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);

  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.95);
  }

  &:hover span {
    text-underline-offset: 0.5rem;
    text-decoration-color: ${({ $theme }) =>
      $theme === "dark" ? "#000" : "#bbb"};
  }
`;

const LinkLabel = styled.span<{ $theme: Theme }>`
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  text-decoration-thickness: 0.2rem;
  text-decoration-color: ${({ $theme }) =>
    $theme === "dark" ? "#ddd" : "#bbb"};
  transition:
    text-underline-offset 0.25s ease,
    text-decoration-color 0.25s ease,
    text-decoration-thickness 0.25s ease;
`;

const Icon = styled.img`
  height: 1.25rem;
  width: 1.25rem;
  user-select: none;
`;

type Props = {
  href: string;
  label?: string;
  theme: Theme;
  size: FontSize;
  iconSrc?: string;
  iconAlt?: string;
};

const Link = ({ href, label, theme, size, iconSrc, iconAlt }: Props) => {
  return (
    <Container href={href} $theme={theme} $size={size} target="_blank">
      {iconSrc ? <Icon src={iconSrc} alt={iconAlt} draggable={false} /> : null}
      {label ? <LinkLabel $theme={theme}>{label}</LinkLabel> : null}
    </Container>
  );
};

export default Link;
