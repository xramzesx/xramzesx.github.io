import styled from "styled-components";
import Container from "../../layout/Container";
import hero from "@/assets/img/hero.jpg";
import sizes from "@/constants/sizes";
import { media } from "@/constants/breakpoints";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const HeroContainer = styled(Container)`
  flex-direction: row;
  justify-content: center;

  ${media.mobile} {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: start;
  }
`;

const Content = styled.div`
  display: flex;
  /* border: 2px dashed gray; */
  flex-direction: column;
  /* flex: 1; */
  padding: 2rem;
  width: 100%;
  justify-content: center;

  ${media.mobile} {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;

  ${media.mobile} {
    text-align: center;
    font-size: 3rem;
  }
`;

const Info = styled.p`
  font-size: 1.5rem;

  ${media.mobile} {
    text-align: center;
    font-size: 1.25rem;
    max-width: 20rem;
  }
`;

const Image = styled.img`
  height: calc(100vh - 2rem);

  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  margin: 0 2rem;

  ${media.mobile} {
    margin-top: 2rem;

    object-fit: cover;
    object-position: top center;

    height: 50vw;
    width: 50vw;
    border-radius: 50vh;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <HeroContainer heightType="page">
        <Content>
          <Title> Jakub Kędra </Title>
          <Info>
            5th-year Computer Science student at AGH University of Science and
            Technology, Faculty of Computer Science
          </Info>
        </Content>

        <Image src={hero} alt="Jakub Kędra" />
      </HeroContainer>
    </Wrapper>
  );
};

export default Hero;
