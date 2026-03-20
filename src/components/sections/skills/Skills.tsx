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

const Skills = () => {
  return (
    <Wrapper>
      <Container widthType="normal" heightType="page">
        <Header>Languages</Header>
        <Header>Technologies</Header>
      </Container>
    </Wrapper>
  );
};

export default Skills;
