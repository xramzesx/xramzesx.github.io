import Container from "@/components/layout/Container";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { useProjects } from "@/hooks/useProjects";
import { media } from "@/constants/breakpoints";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  padding: 6rem 0;
  background: #101010;
  position: relative;
`;

const Background = styled.div`
  pointer-events: none;
  background-image: radial-gradient(
    circle at 1px 1px,
    white 1px,
    transparent 0
  );
  background-size: 15px 15px;
  background-position-x: 7.5px;
  background-position-y: 7.5px;
  opacity: 8%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #ddd;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  ${media.medium} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.small} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.xsmall} {
    grid-template-columns: repeat(1, 1fr);
  }

  grid-auto-flow: dense;

  padding: 0 2rem;
`;

const Projects = () => {
  const projects = useProjects();

  const projectCards = projects.map(
    ({
      projectId,
      name,
      description,
      labels,
      stack,
      demoUrl,
      repoUrl,
      logoUrl,
      thumbnailUrl,
      comingSoon,
      period,
      featured,
    }) => (
      <ProjectCard
        key={projectId}
        projectId={projectId}
        name={name}
        description={description}
        stackBadges={stack}
        demoUrl={demoUrl}
        repoUrl={repoUrl}
        thumbnailUrl={thumbnailUrl}
        logoUrl={logoUrl}
        labels={labels}
        comingSoon={comingSoon}
        period={period}
        size={featured ? "large" : "normal"}
      />
    ),
  );

  return (
    <Wrapper>
      <Background />
      <Container heightType="page">
        <Header>Projects</Header>
        <CardsContainer>{projectCards}</CardsContainer>
      </Container>
    </Wrapper>
  );
};

export default Projects;
