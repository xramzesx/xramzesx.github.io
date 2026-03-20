import Container from "@/components/layout/Container";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  background: #101010;
  color: #e0e0e0;
`;

const FooterContainer = styled(Container)`
  height: 100%;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer widthType="normal" heightType="custom">
        2026 Jakub Kędra
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;
