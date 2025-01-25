import styled from "styled-components";
import { sizeStyleType } from "./types";

export const ButtonComponent = styled.div<{ padding: sizeStyleType }>`
  background: ${({ theme }) => theme.colors.third};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ padding }) => padding.fontSize};
  font-weight: 700;
  padding: ${({ padding }) => padding.padding};
  border-radius: 999999px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  @media only screen and (max-width: 768px) {
    font-size: ${({ padding }) => padding.fontSizeMobile};
    padding: ${({ padding }) => padding.paddingMobile};
  }
`;
