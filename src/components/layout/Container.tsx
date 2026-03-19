import sizes from "@/constants/sizes";
import styled from "styled-components";

type WidthType = "normal" | "wide";
type HeightType = "page" | "custom";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  widthType: WidthType;
  heightType: HeightType;
}

const StyledContainer = styled.div<{
  $widthType: WidthType;
  $heightType: HeightType;
}>`
  /* WIDTH */
  width: 100vw;
  max-width: ${({ $widthType }) => {
    if ($widthType === "wide") {
      return sizes.safeArea.wide;
    } else {
      return sizes.safeArea.normal;
    }
  }}px;

  /* HEIGHT */
  ${({ $heightType }) => {
    if ($heightType === "page") {
      return "min-height: 100vh;";
    } else {
      return "";
    }
  }}

  display: flex;
  flex-direction: column;
`;

const Container = ({ widthType, heightType, ...rest }: ContainerProps) => {
  return (
    <StyledContainer
      $widthType={widthType}
      $heightType={heightType}
      {...rest}
    />
  );
};

export default Container;
