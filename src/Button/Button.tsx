import { ButtonProps } from "./Button.types";
import styled from "styled-components";

const Button = styled.button<ButtonProps>`
  color: ${({ textColor }) => textColor};
  background: ${({ buttonColor }) => buttonColor};
  border: ${({ border }) => border || "none"};
  border-radius: 8%;
  padding: ${({ padding }) => padding || "0.5em 1em"};
`;

export default Button;
