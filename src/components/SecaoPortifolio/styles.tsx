import styled from "styled-components";

export const SecaoPortifolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 8rem 8rem;
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
  max-width: 31%;
  height: 100%;
  max-height: 22rem;
  border-radius: 8px;
  border: 2.5px solid ${({ theme }) => theme.colors.primary};
  overflow: hidden;

  transition: scale 0.4s;
  cursor: default;

  &:hover {
    scale: 1.05;
  }

  @media only screen and (max-width: 1180px) {
    max-width: 30%;
  }
`;

export const SecaoPortifolioCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
