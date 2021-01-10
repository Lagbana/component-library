import { CSSProperties } from "react";

export interface FlexProps {
  alignContent?: CSSProperties["alignContent"];
  alignItems?: CSSProperties["alignItems"];
  alignSelf?: CSSProperties["alignSelf"];
  flexDirection?: CSSProperties["flexDirection"];
  flexFlow?: CSSProperties["flexFlow"];
  flexWrap?: CSSProperties["flexWrap"];
  height?: CSSProperties["height"];
  justifyContent?: CSSProperties["justifyContent"];
  position?: CSSProperties["position"];
  width?: CSSProperties["width"];
  zIndex?: CSSProperties["zIndex"];
}

export interface FlexItemProps {
  alignSelf?: CSSProperties["alignSelf"];
  flexBasis?: CSSProperties["flexBasis"];
  flexGrow?: CSSProperties["flexGrow"];
  flexShrink?: CSSProperties["flexShrink"];
  order?: CSSProperties["order"];
}
