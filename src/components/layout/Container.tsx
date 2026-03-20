import sizes from "@/constants/sizes";
import styled from "styled-components";

type HeightType = "page" | "custom";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  heightType: HeightType;
}

const StyledContainer = styled.div<{
  $heightType: HeightType;
}>`
  /* WIDTH */
  width: 100vw;
  max-width: ${sizes.safeArea.normal}px;

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

const Container = ({ heightType, ...rest }: ContainerProps) => {
  return <StyledContainer $heightType={heightType} {...rest} />;
};

export default Container;
