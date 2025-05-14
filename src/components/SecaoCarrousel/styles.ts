import styled from "styled-components";

export const CarrouselContainer = styled.div`
  width: 100%;
  height: 350px;
  padding: 2rem;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media (max-width: 1180px) {
    height: 444px;
    padding: 1rem;
  }
`;

export const CarrouselImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 1180px) {
    height: auto;
    width: auto;
  }
`;

export const CarrouselCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  border-radius: 12px;
  flex-shrink: 0;
`;
