import styled from "styled-components";

const TileImage = styled.img`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  transition: opacity 0.25s ease;
`;

const IdleTileImage = styled(TileImage)`
  filter: saturate(0) brightness(75%);
`;

const ActiveTileImage = styled(TileImage)`
  opacity: 0;
`;

const Tile = styled.a`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.25s ease;
  border-radius: 0.5rem;
  overflow: hidden;

  position: relative;

  &:hover ${ActiveTileImage} {
    opacity: 1;
  }

  &:hover ${IdleTileImage} {
    opacity: 0;
  }
`;

type Props = {
  href: string;
  idleSrc: string;
  activeSrc: string;
  alt: string;
};

// TODO: Add skeletons

const BadgeTile = ({ href, idleSrc, activeSrc, alt }: Props) => {
  return (
    <Tile href={href}>
      <IdleTileImage src={idleSrc} alt={alt} draggable={false} />
      <ActiveTileImage src={activeSrc} alt={alt} draggable={false} />
    </Tile>
  );
};

export default BadgeTile;
