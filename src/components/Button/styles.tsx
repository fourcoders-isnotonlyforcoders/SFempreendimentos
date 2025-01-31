import styled from "styled-components";
import { sizeStyleType, styleType } from "./types";

export const ButtonComponent = styled.div<{
  padding: sizeStyleType;
  customStyle: styleType;
}>`
  background: ${({ theme, customStyle }) =>
    theme.colors[customStyle.backgroundColor]};
  color: ${({ theme, customStyle }) => theme.colors[customStyle.color]};
  font-size: ${({ padding }) => padding.fontSize};
  font-weight: 700;
  padding: ${({ padding }) => padding.padding};
  border-radius: 999999px;
  cursor: pointer;
  width: fit-content;
  transition: background 0.3s, color 0.3s, border 0.3s, opacity 0.5s,
    transform 0.5s !important;
  border: ${({ theme, customStyle }) =>
    `${customStyle.border} ${theme.colors[customStyle.color]}`};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: ${({ theme, customStyle }) =>
      `${customStyle.border} ${theme.colors.primary}`};
  }

  @media only screen and (max-width: 768px) {
    font-size: ${({ padding }) => padding.fontSizeMobile};
    padding: ${({ padding }) => padding.paddingMobile};
  }
`;
