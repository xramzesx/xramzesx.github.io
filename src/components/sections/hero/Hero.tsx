import styled from "styled-components";
import Container from "../../layout/Container";
import hero from "@/assets/img/hero.jpg";
import githubIcon from "@/assets/img/icons/github.svg";
import linkedInIcon from "@/assets/img/icons/linkedin.svg";
import { media } from "@/constants/breakpoints";
import Link from "@/components/common/Link";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
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
  opacity: 8%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const HeroContainer = styled(Container)`
  flex-direction: row;
  justify-content: center;

  ${media.mobile} {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
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
  height: calc(100svh - 2rem);

  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  margin: 0 2rem;

  user-select: none;

  ${media.mobile} {
    margin-top: 2rem;

    object-fit: cover;
    object-position: top center;

    height: max(min(20rem, 50vw), 15rem);
    width: max(min(20rem, 50vw), 15rem);
    /* height: 50vw; */
    /* width: 50vw; */
    border-radius: 50vh;
  }
`;

const LinksContainer = styled.div`
  padding-top: 0.25rem;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Background />
      <HeroContainer heightType="page">
        <Content>
          <Title> Jakub Kędra </Title>
          <Info>
            5th-year Computer Science student at AGH University of Science and
            Technology, Faculty of Computer Science
          </Info>
          <LinksContainer>
            <Link
              href="https://www.linkedin.com/in/jakubkedra/"
              label="@jakubkedra"
              theme="dark"
              size="large"
              iconSrc={linkedInIcon}
              iconAlt="LN"
            />
            <Link
              href="https://github.com/xramzesx"
              label="@xramzesx"
              theme="dark"
              size="large"
              iconSrc={githubIcon}
              iconAlt="GH"
            />
          </LinksContainer>
        </Content>

        <Image src={hero} alt="Jakub Kędra" draggable={false} />
      </HeroContainer>
    </Wrapper>
  );
};

export default Hero;
