import { CSSProperties } from "react";
// const { }
// React.HTMLAttributes<T>.style?: React.CSSProperties | undefined
export interface FlexProps {
  alignContent?: CSSProperties["alignContent"];
  alignItems?: CSSProperties["alignItems"];
  alignSelf?: CSSProperties["alignSelf"];
  flexDirection?: CSSProperties["flexDirection"];
  flexFlow?: CSSProperties["flexFlow"];
  flexWrap?: CSSProperties["flexWrap"];
  fontFamily?: CSSProperties["fontFamily"];
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  height?: CSSProperties["height"];
  justifyContent?: CSSProperties["justifyContent"];
  position?: CSSProperties["position"];
  width?: CSSProperties["width"];
  zIndex?: CSSProperties["zIndex"];
  color?: CSSProperties["color"];
  background?: CSSProperties["backgroundColor"];
}

export interface FlexItemProps {
  alignSelf?: CSSProperties["alignSelf"];
  flexBasis?: CSSProperties["flexBasis"];
  flexGrow?: CSSProperties["flexGrow"];
  flexShrink?: CSSProperties["flexShrink"];
  fontFamily?: CSSProperties["fontFamily"];
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  order?: CSSProperties["order"];
  style?: CSSProperties;
}
