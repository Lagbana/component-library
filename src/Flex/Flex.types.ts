import { CSSProperties } from "react";

export interface FlexProps {
  alignItems?: CSSProperties["alignItems"];
  alignSelf?: CSSProperties["alignSelf"];
  flexDirection?: CSSProperties["flexDirection"];
  flexWrap?: CSSProperties["flexWrap"];
  height?: CSSProperties["height"];
  justifyContent?: CSSProperties["justifyContent"];
  position?: CSSProperties["position"];
  width?: CSSProperties["width"];
  zIndex?: CSSProperties["zIndex"];
}

export interface FlexItemProps {
  alignSelf?: CSSProperties["alignSelf"];
}
