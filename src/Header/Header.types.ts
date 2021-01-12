import { CSSProperties } from 'react'

export interface HeaderProps {
  backgroundColor?: CSSProperties["backgroundColor"];
  fontFamily?: CSSProperties["fontFamily"];
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  justifyContent?: CSSProperties["justifyContent"];
  padXY?: "small" | "medium" | "large" | "none";
  textColor?: CSSProperties["color"];
}
