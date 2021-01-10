import { HeaderProps } from "./Header.types";
import styled from "styled-components";

const Header = styled.div<HeaderProps>`
    display: flex;
    width: 100%;
    background: ${({backgroundColor})=>backgroundColor};
    color: ${({textColor})=>textColor};
    font-weight: 500;
    padding: ${({ size }) => {
      switch (size) {
        case "large":
         return "1em 0.5em";
        case "small":
          return "0.5em 0.25em";
        default:
          return "0.75em 0.5em";
      }
    }};
    font-size: ${({ size }) => {
      switch (size) {
        case "large":
          return "30px";
        case "small":
          return "26px";
        default:
          return "28px";
      }
    }};
    justify-content: center;
    align-items: center;
`;

export default Header;
