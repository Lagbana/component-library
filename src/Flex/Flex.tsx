import styled, { StyledComponent } from "styled-components";
import { FlexProps, FlexItemProps } from "./Flex.types";

const Flex = styled.div<FlexProps>`
  align-content: ${({ alignContent }) => alignContent || "normal"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  align-self: ${({ alignSelf }) => alignSelf || "auto"};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  flex-flow: ${({ flexFlow }) => flexFlow || "row nowrap"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "inherit"};
  height: ${({ height }) => height || `auto`};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  position: ${({ position }) => position || `relative`};
  width: ${({ width }) => width || `100%`};
  z-index: ${({ zIndex }) => zIndex || "auto"};
`;

Flex.displayName = "Flex";

const FlexItem = styled.div<FlexItemProps>`
  align-self: ${({ alignSelf }) => alignSelf || "flex-start"};
  flex-basis: ${({ flexBasis }) => flexBasis || "auto"};
  flex-grow: ${({ flexGrow }) => flexGrow || 0};
  flex-shrink: ${({ flexShrink }) => flexShrink || 1};
  order: ${({ order }) => order || 0};
`;

const defaultExport: StyledComponent<"div", any, FlexProps, never> & {
  Item: StyledComponent<"div", any, FlexItemProps, never>;
} = Object.assign(Flex, { Item: FlexItem });

export default defaultExport;
