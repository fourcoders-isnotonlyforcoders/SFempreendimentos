import styled from "styled-components";
import { sizeStyleType, styleType } from "./types";
import { Link } from "react-router-dom";

export const ButtonComponent = styled.div<{
  padding: sizeStyleType;
  customStyle: styleType;
}>`
  /* background: radial-gradient(
    circle,
    rgba(0, 123, 231, 0.11),
    rgba(80, 150, 255, 0.15)
  ); */
  background: #007DE7;
  color: ${(props) => props.theme.colors.black};
  font-size: ${({ padding }) => padding.fontSize};
  font-weight: bold;
  padding: ${({ padding }) => padding.padding};
  border-radius: 5rem;
  cursor: pointer;
  width: fit-content;
  transition: all .4s ease-in-out !important;
  border: 2px solid ${(props) => props.theme.colors.primaryBlue};
  font-weight: 700;
  &:hover {
    transform: scale(1.02) !important;
    opacity: .8;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.navyBlue};
    border: 2px solid transparent;
      box-shadow: 0 0 11px 2px rgba(0, 123, 231, 0.11);
  }

  @media only screen and (max-width: 768px) {
    font-size: ${({ padding }) => padding.fontSizeMobile};
    padding: ${({ padding }) => padding.paddingMobile};
  }
`;

export const ButtonReturnContainer = styled(Link)`
  border: 2px solid ${(props) => props.theme.colors.fourth};
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  padding: 1rem;
  border-radius: 999999px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, border 0.3s, opacity 0.5s,
    transform 0.5s !important;
  color: ${(props) => props.theme.colors.primaryBlue};
  background: radial-gradient(
    circle,
    rgba(0, 123, 231, 0.1),
    rgba(80, 150, 255, 0.22)
  );

  &:hover {
    transform: scale(1.04);
    opacity: 1;
    filter: brightness(1.1);
    box-shadow: 0 0 22px 2px rgba(80, 150, 255, 0.22);
  }
`;

export const ButtonReturnIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  transform: rotateY(3.142rad);

`;
