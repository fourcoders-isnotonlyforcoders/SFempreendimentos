import styled from "styled-components";


export const CarrouselContainer = styled.div`
  width: 100%; 
  height: 350px; 
  padding: 2rem;
  margin: 0 auto;
  overflow: hidden; 
  display: flex;
  justify-content: center; 
  position: relative;
`;

export const CarrouselImageContainer = styled.div`
  display: flex; 
  align-items: center;
  width: 100%;
  height: 100%; 
`;

export const CarrouselCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 8px;
  flex-shrink: 0; 
`;
