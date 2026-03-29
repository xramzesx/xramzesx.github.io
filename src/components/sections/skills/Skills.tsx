import Container from "@/components/layout/Container";
import styled from "styled-components";
import { useSkills } from "@/hooks/useSkills";
import Badge from "@/components/common/Badge";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  background: #101010;
  padding: 6rem 0;
`;

const Header = styled.h1`
  /* text-align: center; */
  padding: 0 2rem;
  color: #eee;
`;

const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem 2rem;
  gap: 0.5rem;
  flex-wrap: wrap;
  max-width: calc(11 * 3rem + 10 * 0.5rem + 4rem);
  /* align-self: center; */
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: calc(11 * 3rem + 10 * 0.5rem + 4rem);
  width: 100%;
  align-items: start;
`;

const StyledContainer = styled(Container)`
  gap: 3rem;
  align-items: center;
`;

const Skills = () => {
  const skills: ResolvedSkill[] = useSkills();

  const content = skills.map(({ title, badges }) => {
    const badgeComponents = badges.map((badge) => (
      <Badge
        key={badge.iconId}
        href={badge.href}
        label={badge.name}
        iconSrc={badge.activeSrc}
        iconAlt={badge.alt}
        iconForceRound={badge.forceRound}
        iconSize="normal"
        theme="dark"
      />
    ));

    return (
      <SectionContainer key={title}>
        <Header>{title}</Header>
        <BadgesContainer>{badgeComponents}</BadgesContainer>
      </SectionContainer>
    );
  });

  return (
    <Wrapper>
      <StyledContainer heightType="page">{content}</StyledContainer>
    </Wrapper>
  );
};

export default Skills;
