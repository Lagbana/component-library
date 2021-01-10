import { ListProps, ListItemProps } from "./List.types";
import styled from "styled-components";


export const List = styled.ul<ListProps>`
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "columnn"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  list-style: none;
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `100%`};
`;
export const ListItem = styled.li<ListItemProps>`
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  align-self: ${({ alignSelf }) => alignSelf || "flex-start"};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  display: flex;
  flex-basis: ${({ flexBasis }) => flexBasis || "auto"};
  order: ${({ order }) => order || 0};
`;

