import sizes from "./sizes";

const aspectRatioBreakpoints = {
  mobile: "5/4",
};

const appendMediaPrefix = (sizeInPixels: number) =>
  `@media (max-width: ${sizeInPixels}px)`;

export const media = {
  mobile: `@media (max-aspect-ratio: ${aspectRatioBreakpoints.mobile})`,

  xlarge: appendMediaPrefix(sizes.breakpoints.xlarge),
  large: appendMediaPrefix(sizes.breakpoints.large),
  medium: appendMediaPrefix(sizes.breakpoints.medium),
  small: appendMediaPrefix(sizes.breakpoints.small),
  xsmall: appendMediaPrefix(sizes.breakpoints.xsmall),
};
