import styled from "styled-components";

const Container = styled.a`
  font-size: 1.25rem;
  text-decoration: none;

  padding: 0.5rem 0.25rem;
  display: inline-flex;
  color: black;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 1.5);

  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.95);
  }

  &:hover span {
    text-underline-offset: 0.5rem;
    text-decoration-color: #000;
  }
`;

const LinkLabel = styled.span`
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  text-decoration-thickness: 0.2rem;
  text-decoration-color: #ddd;
  transition:
    text-underline-offset 0.25s ease,
    text-decoration-color 0.25s ease,
    text-decoration-thickness 0.25s ease;
`;

const Icon = styled.img`
  height: 1.25rem;
  width: 1.25rem;
`;

type Props = {
  href: string;
  label: string;
  iconSrc?: string;
  iconAlt?: string;
};

const Link = ({ href, label, iconSrc, iconAlt }: Props) => {
  return (
    <Container href={href} target="_blank">
      {iconSrc ? <Icon src={iconSrc} alt={iconAlt} draggable={false} /> : null}
      <LinkLabel>{label}</LinkLabel>
    </Container>
  );
};

export default Link;
