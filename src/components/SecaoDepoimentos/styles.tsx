import styled from "styled-components";

export const SecaoDepoimentosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 2rem;
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
  gap: 2rem;
  min-height: 26rem;
  width: 100%;
`;

export const CarrouselCard = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
