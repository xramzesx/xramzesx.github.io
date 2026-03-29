import Link from "@/components/common/Link";
import Container from "@/components/layout/Container";
import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;

  background: #101010;
  color: #ddd;
`;

const FooterContainer = styled(Container)`
  padding: 0 2rem;
  padding-top: 4rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Copyright = styled.span<{ $textLength: number }>`
  flex: 1;
  padding: 0.5rem 0.25rem;
  font-size: 0.75rem;

  text-align: right;
  min-width: ${({ $textLength }) => `calc(1ch * ${$textLength} + 0.5rem)`};
  align-self: end;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightContent = `© ${currentYear} Jakub Kędra `;
  return (
    <Wrapper>
      <FooterContainer heightType="custom">
        <LinksContainer>
          <Link
            href="https://www.linkedin.com/in/jakubkedra/"
            label="LinkedIn"
            size="normal"
            theme="light"
          />
          <Link
            href="https://github.com/xramzesx"
            theme="light"
            size="normal"
            label="GitHub"
          />
        </LinksContainer>
        <Copyright $textLength={copyrightContent.length}>
          {copyrightContent}
        </Copyright>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;
