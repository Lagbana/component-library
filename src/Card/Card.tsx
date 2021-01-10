import { CardProps } from "./Card.types";
import styled from "styled-components";

const Card = styled.div<CardProps>`
  background: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border || "1px solid black"};
  padding: ${({ padding }) => padding || "0.5em"};
`;

export default Card;

