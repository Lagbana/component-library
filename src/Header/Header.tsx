import { HeaderProps } from "./Header.types";
import styled from "styled-components";

const Header = styled.header<HeaderProps>`
  align-items: center;
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  padding: ${({ padXY }) => {
    switch (padXY) {
      case "large":
        return "1em 0.5em";
      case "medium":
        return "0.75em 0.5em";
      case "small":
        return "0.5em 0.25em";
      default:
        return "0";
    }
  }};
  width: 100%;
`;

export default Header;
