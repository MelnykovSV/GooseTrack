import styled from "styled-components";
import { getRandomHexColor } from "./getRandomHexColor";

export const CircularAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  //   border: 2px solid #3e85f3;
  border-radius: 50%;
`;

export const DefaultAvatar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${getRandomHexColor()};
`;

export const Letter = styled.p`
  color: #fff;
  font-size: 40px;

  @media screen and (min-width: 767px) {
    font-size: 60px;
  }
`;