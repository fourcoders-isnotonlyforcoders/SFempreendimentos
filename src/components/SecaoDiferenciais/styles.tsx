import styled from "styled-components";

export const SecaoDiferenciaisContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.6rem;
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 10rem 4rem;
`;

export const SecaoDiferenciaisCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const SecaoDiferenciaisCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
  max-width: 300px;
  min-width: 280px;
  min-height: 300px;
  padding: 2rem;
  border-radius: 12px;
  border: 2.5px solid ${({ theme }) => theme.colors.primary};
  transition: scale 0.4s;
  cursor: default;

  &:hover {
    scale: 1.05;
  }
`;

export const SecaoDiferenciaisCardIcon = styled.img`
  width: 3.3rem;
  height: 3.3rem;
`;

export const SecaoDiferenciaisCardTitle = styled.h3`
  font-size: 3.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary} 0%,
      transparent 100%
    );
  }
`;

export const SecaoDiferenciaisCardDescription = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;
