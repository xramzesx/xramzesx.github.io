import styled from "styled-components";
import Badge from "@/components/common/Badge";
import Link from "@/components/common/Link";
import { media } from "@/constants/breakpoints";

type CardSize = "normal" | "large";

const LOGO_SIZE = "1rem";

const Container = styled.div<{ $size: CardSize; $hasThumbnail: boolean }>`
  border-radius: 0.5rem;
  background-color: #2229;
  color: #ccc;
  position: relative;

  display: flex;
  flex-direction: column;

  grid-column: ${({ $size }) => ($size === "large" ? "span 2" : "span 1")};
  grid-row: ${({ $hasThumbnail }) =>
    $hasThumbnail === true ? "span 2" : "span 1"};

  ${media.xsmall} {
    grid-column: span 1;
    grid-row: span 1;
  }
`;

const Thumbnail = styled.img`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  aspect-ratio: 5 / 3;
  object-fit: cover;
  object-position: top;

  width: 100%;
  user-select: none;
`;

const Content = styled.div`
  padding: 0.75rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.25rem;

  background: #111;

  width: calc(1rem + ${LOGO_SIZE});
  height: calc(1rem + ${LOGO_SIZE});
  box-shadow: inset 0 0 0.1rem #101010;
`;

const Logo = styled.img`
  width: ${LOGO_SIZE};
  height: ${LOGO_SIZE};
  user-select: none;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  flex: 1;
`;

const Period = styled.div`
  font-size: 0.75rem;
  color: #666;
`;

const LabelsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem 0;
`;

const Label = styled.span`
  background: #111;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  color: #999;
`;

const Description = styled.p`
  font-size: 0.75rem;
  padding: 0.5rem 0;
  flex: 1;
  color: #999;
`;

const StackBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const Footer = styled.div`
  border-top: 1px solid #333;
  padding-top: 0.5rem;
  margin: 0.75rem;
`;

type Props = {
  projectId: string;
  name: string;
  description: string;

  labels: ProjectLabel[];
  stackBadges: ResolvedIcon[];

  comingSoon: boolean;
  period: Period;

  logoUrl?: string;
  thumbnailUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  size: CardSize;
};

const ProjectCard = ({
  projectId,
  name,
  description,
  labels,
  stackBadges,
  logoUrl,
  thumbnailUrl,
  repoUrl,
  demoUrl,
  comingSoon,
  period,
  size,
}: Props) => {
  const labelComponents = labels.map((label) => (
    <Label key={label}>{label}</Label>
  ));

  const badges = stackBadges.map((badge) => (
    <Badge
      key={badge.iconId}
      href={badge.href}
      iconSrc={badge.activeSrc}
      iconAlt={badge.alt}
      iconForceRound={badge.forceRound}
      iconSize="small"
      theme="dark"
    />
  ));

  const repoLink = repoUrl ? (
    <Link href={repoUrl} theme="light" size="small" label="View on GitHub >" />
  ) : null;

  const demoLink = demoUrl ? (
    <Link href={demoUrl} theme="light" size="small" label="Live Demo >" />
  ) : null;

  return (
    <Container $size={size} $hasThumbnail={thumbnailUrl !== undefined}>
      {thumbnailUrl ? <Thumbnail src={thumbnailUrl} draggable={false} /> : null}
      <Content>
        <Header>
          {logoUrl ? (
            <LogoContainer>
              <Logo src={logoUrl} draggable={false} />
            </LogoContainer>
          ) : null}
          <Title>{name}</Title>
          <Period>{period.to?.substring(0, 4)}</Period>
        </Header>
        <LabelsContainer>{labelComponents}</LabelsContainer>
        <Description>{description}</Description>
        <StackBadges>{badges}</StackBadges>
      </Content>
      <Footer>
        {repoLink}
        {demoLink}
      </Footer>
    </Container>
  );
};

export default ProjectCard;
