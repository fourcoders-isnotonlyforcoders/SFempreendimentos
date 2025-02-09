import styled from "styled-components";

export const TituloSecaoContainer = styled.div<{
  align: "center" | "left";
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: ${({ align }) => align};
`;

export const PreTituloSecao = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0.3rem;
  color: ${(props) => props.theme.colors.primaryBlue};
`;

export const TituloSecao = styled.div<{
  color: string;
}>`
  font-size: 3.6rem;
  font-weight: 700;
  color: ${({ theme, color }) => theme.colors[color]};
  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`;
