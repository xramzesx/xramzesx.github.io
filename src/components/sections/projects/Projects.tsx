import Container from "@/components/layout/Container";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { useProjects } from "@/hooks/useProjects";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  padding: 6rem 0;
  background: #efefef;
  position: relative;
`;

const Background = styled.div`
  pointer-events: none;
  background-image: radial-gradient(
    circle at 1px 1px,
    currentColor 1px,
    transparent 0
  );
  background-size: 15px 15px;
  background-position-x: 7.5px;
  background-position-y: 7.5px;
  opacity: 10%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 2rem;
  flex-wrap: wrap;
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
