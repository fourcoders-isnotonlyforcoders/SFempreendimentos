import styled from "styled-components";

export const SecaoDepoimentosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 2rem 14rem;
  gap: 11rem;
  background-color: ${({ theme }) => theme.colors.fifth};
  border-radius: 350px 0px 0px 0px;
`;

export const SecaoDepoimentosContent = styled.div`
  width: 100%;
  padding: 0 9rem;
`;

export const CarrouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  min-height: 26rem;
  width: 100%;
`;

export const CarrouselCardContainer = styled.div`
  min-height: 26rem;
  max-width: 1020px;
`;

export const CarrouselCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const CarrouselCardAvaliation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const CarrouselCardStars = styled.div`
  display: flex;
`;

export const CarrouselCardStar = styled.img`
  width: 25px;
  height: 25px;
`;

export const CarrouselCardAvaliationText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 2.8rem;
  letter-spacing: 0.05rem;
`;

export const CarrouselCardAuthor = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
`;

export const CarrouselCardAuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const CarrouselCardAuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CarrouselCardAuthorInfoText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.5rem;
`;

export const CarrouselButton = styled.img`
  width: 33px;
  height: 33px;
  cursor: pointer;
`;
