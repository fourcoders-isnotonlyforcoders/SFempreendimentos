import styled from "styled-components";
import { sizeStyleType, styleType } from "./types";
import { Link } from "react-router-dom";

export const ButtonComponent = styled.div<{
  padding: sizeStyleType;
  customStyle: styleType;
}>`
  background: radial-gradient(
    circle,
    rgba(0, 123, 231, 0.1),
    rgba(80, 150, 255, 0.22)
  );
  color: ${(props) => props.theme.colors.primaryBlue};
  font-size: ${({ padding }) => padding.fontSize};
  font-weight: 700;
  padding: ${({ padding }) => padding.padding};
  border-radius: 5rem;
  cursor: pointer;
  width: fit-content;
  transition: background 0.3s, color 0.3s, border 0.3s, opacity 0.5s,
    transform 0.5s !important;
  border: 2px solid ${(props) => props.theme.colors.primaryBlue};
  font-weight: bold;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryBlue};
    color: ${({ theme }) => theme.colors.white};
    border: ${({ theme, customStyle }) =>
      `${customStyle.border} ${theme.colors.primary}`};
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
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonReturnIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  transform: rotateY(3.142rad);
`;
