import styled from "styled-components";

export const SecaoDiferenciaisBackground = styled.div`
  background: linear-gradient(
    to bottom,
    #f5f5f5,
    #f5f5f5,
    rgba(0, 0, 0, 0) 98%
  );
  border-top-right-radius: 222px;
`;

export const SecaoDiferenciaisContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.6rem;
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 10rem 8rem 20rem;
  @media (max-width: 1180px) {
    padding: 7rem 4rem 10rem;
  }
`;

export const SecaoDiferenciaisCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 1180px) {
    flex-direction: column
    ;
  }
`;

export const SecaoDiferenciaisCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  width: 25%;
  min-height: 322px;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.black};
  border: 2.5px solid ${({ theme }) => theme.colors.black};
  transition: scale 0.4s, opacity 0.5s, transform 0.5s !important;
  cursor: pointer;

  &:hover {
    scale: 1.05;
  }
  @media (max-width: 1180px) {
    width: 85%;
    padding: 2rem 1.8rem;
  }
`;

export const SecaoDiferenciaisCardIcon = styled.img`
  width: 3.3rem;
  height: 3.3rem;

`;

export const SecaoDiferenciaisCardTitle = styled.h3`
  font-size: 2.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2.2px;
    border-radius: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primaryBlue} 0%,
      transparent 100%
    );
  }
  @media (max-width: 1180px) {
    font-size: 2.4rem;
  }
`;

export const SecaoDiferenciaisCardDescription = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  @media (max-width: 1180px) {
    font-size: 2rem;
  }
`;
