import styled, { StyledComponent } from "styled-components";
import { FlexProps, FlexItemProps } from "./Flex.types";

const Flex = styled.div<FlexProps>`
  align-content: ${({ alignContent }) => alignContent || "normal"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  align-self: ${({ alignSelf }) => alignSelf || "auto"};
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow || "row nowrap"};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  height: ${({ height }) => height || `auto`};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  position: ${({ position }) => position || `relative`};
  width: ${({ width }) => width || `100%`};
  z-index: ${({ zIndex }) => zIndex || "auto"};
`;

Flex.displayName = "Flex";

const FlexItem = styled.div<FlexItemProps>`
  align-self: ${({ alignSelf }) => alignSelf || "auto"};
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
  flex: ${({ flex }) => flex || "0 1 auto"};
  order: ${({ order }) => order || 0};
`;

const defaultExport: StyledComponent<"div", any, FlexProps, never> & {
  Item: StyledComponent<"div", any, FlexItemProps, never>;
} = Object.assign(Flex, { Item: FlexItem });

export default defaultExport;
