import Container from "@/components/layout/Container";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  background: #101010;
  padding: 6rem 0;
`;

const Header = styled.h1`
  text-align: center;
  color: white;
`;

const TileImage = styled.img`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
`;

const IdleTileImage = styled(TileImage)`
  filter: saturate(0) brightness(75%); /* biały → czarny */
`;

const ActiveTileImage = styled(TileImage)`
  transition: opacity 0.25s ease;

  opacity: 0;
`;

const Tile = styled.a`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.25s ease;
  border-radius: 0.5rem;
  overflow: hidden;

  position: relative;

  &:hover ${ActiveTileImage} {
    opacity: 1;
  }
`;

type BadgeTileProps = {
  href: string;
  idleSrc: string;
  activeSrc: string;
  alt: string;
};

const BadgeTile = ({ href, idleSrc, activeSrc, alt }: BadgeTileProps) => {
  return (
    <Tile href={href}>
      <IdleTileImage src={idleSrc} alt={alt} draggable={false} />
      <ActiveTileImage src={activeSrc} alt={alt} draggable={false} />
    </Tile>
  );
};

const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem 2rem;
  gap: 0.5rem;
  flex-wrap: wrap;
  max-width: calc(15 * 3rem + 14 * 0.5rem + 4rem);
  align-self: center;
`;

import jsIcon from "@/assets/img/icons/javascript-flat.svg";

const mockedSkill = {
  href: "https://skillicons.dev/icons?i=js",

  idleSrc: jsIcon,
  activeSrc:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",

  alt: "js",
};

const Skills = () => {
  // TODO: Replace mocked data with data from external source/JSON
  const mockedData = Array.from({ length: 25 }, () => ({ ...mockedSkill }));
  const badges = mockedData.map((data) => (
    <BadgeTile
      href={data.href}
      idleSrc={data.idleSrc}
      activeSrc={data.activeSrc}
      alt={data.alt}
    />
  ));

  return (
    <Wrapper>
      <Container heightType="page">
        <Header>Languages</Header>
        <BadgesContainer>{badges}</BadgesContainer>
        <Header>Technologies</Header>
      </Container>
    </Wrapper>
  );
};

export default Skills;
