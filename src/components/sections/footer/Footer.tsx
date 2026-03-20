import Container from "@/components/layout/Container";
import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;

  background: #101010;
  color: #e0e0e0;
`;

const FooterContainer = styled(Container)`
  padding-top: 4rem;
  padding-bottom: 1rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <FooterContainer heightType="custom">
        © {currentYear} Jakub Kędra
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;
