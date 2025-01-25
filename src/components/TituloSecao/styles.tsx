import styled from "styled-components";

export const TituloSecaoContainer = styled.div<{
  align: "center" | "left";
  color: "white" | "secondary";
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: ${({ align }) => align};
  color: ${({ color, theme }) => theme.colors[color]};
`;

export const PreTituloSecao = styled.p`
  font-size: 2rem;
  letter-spacing: 0.3rem;
`;

export const TituloSecao = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
`;
