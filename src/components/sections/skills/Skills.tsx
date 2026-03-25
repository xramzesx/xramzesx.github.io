import Container from "@/components/layout/Container";
import styled from "styled-components";
import BadgeTile from "@/components/common/BadgeTile";
import jsIcon from "@/assets/img/icons/javascript-flat.svg";

const mockedSkill = {
  href: "https://skillicons.dev/icons?i=js",

  idleSrc: jsIcon,
  activeSrc:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",

  alt: "js",
};

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
        <BadgesContainer>{badges}</BadgesContainer>
      </Container>
    </Wrapper>
  );
};

export default Skills;
