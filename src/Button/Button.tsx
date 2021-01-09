// Generated with util/create-component.js
import React from "react";

import "./Button.scss";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = (props) => {
  const { style, buttonColor, textColor, padding, children, onClick } = props;
  return (
    <button
      style={{
        color: textColor,
        background: buttonColor,
        padding: padding || "0.5em 1em",
        border: "none",
        borderRadius: '8%',
        ...style
      }}
      onClick={()=>onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
