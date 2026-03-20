import Container from "@/components/layout/Container";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Header = styled.h1`
  text-align: center;
`;

const Projects = () => {
  return (
    <Wrapper>
      <Container widthType="normal" heightType="page">
        <Header>Projects</Header>
      </Container>
    </Wrapper>
  );
};

export default Projects;
