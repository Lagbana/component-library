import { CSSProperties } from "react";

export interface ButtonProps {
    buttonColor?: string;
    padding?: string;
    textColor?: string;
    style?: CSSProperties;
    onClick?: () => void;
}