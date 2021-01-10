import { CSSProperties } from "react";

export interface ListProps {
  alignItems?: CSSProperties["alignItems"];
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  flexDirection?: CSSProperties["flexDirection"];
  flexWrap?: CSSProperties["flexWrap"];
  height?: CSSProperties["height"];
  justifyContent?: CSSProperties["justifyContent"];
  width?: CSSProperties["width"];
}
export interface ListItemProps {
  alignItems?: CSSProperties["alignItems"];
  alignSelf?: CSSProperties["alignSelf"];
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  flexBasis?: CSSProperties["flexBasis"];
  order?: CSSProperties["order"];
}
