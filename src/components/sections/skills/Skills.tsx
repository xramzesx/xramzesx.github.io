import Container from "@/components/layout/Container";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  background: #101010;
`;

const Header = styled.h1`
  text-align: center;
  color: white;
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

  &:hover {
    filter: none;
  }
`;

const TileImage = styled.img`
  width: 100%;
  height: 100%;
`;

type BadgeTileProps = {
  href: string;
  imgSrc: string;
  imgAlt: string;
};

const BadgeTile = ({ href, imgSrc, imgAlt }: BadgeTileProps) => {
  return (
    <Tile href={href}>
      <TileImage src={imgSrc} alt={imgAlt} draggable={false} />
    </Tile>
  );
};

const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  gap: 0.5rem;
  flex-wrap: wrap;
  max-width: calc(15 * 3rem + 14 * 0.5rem);
  align-self: center;
`;

const mockedSkill = {
  href: "https://skillicons.dev/icons?i=js",
  imgSrc:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  imgAlt: "js",
};

const Skills = () => {
  // TODO: Replace mocked data with data from external source/JSON
  const mockedData = Array.from({ length: 25 }, () => ({ ...mockedSkill }));
  const badges = mockedData.map((data) => (
    <BadgeTile href={data.href} imgSrc={data.imgSrc} imgAlt={data.imgAlt} />
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
