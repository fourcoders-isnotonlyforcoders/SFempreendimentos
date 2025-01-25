import styled from "styled-components";

export const SecaoPortifolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.4rem;
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 11rem 4rem;
`;

export const SecaoPortifolioCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.5rem;
`;

export const SecaoPortifolioCard = styled.div`
  width: 100%;
  max-width: 37rem;
  height: 100%;
  max-height: 22rem;
  border-radius: 8px;
  border: 2.5px solid ${({ theme }) => theme.colors.primary};
  overflow: hidden;
`;

export const SecaoPortifolioCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
