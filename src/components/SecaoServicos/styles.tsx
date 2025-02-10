import styled from "styled-components";

export const SecaoServicosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1350px;
  width: 100%;
  margin: 0 auto;
  padding: 7rem 8rem;
  gap: 3rem;
`;

export const SecaoServicosItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  gap: 2rem;
`;

export const SecaoServicosItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1.5rem;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.complementaryBlue};
  }
`;

export const SecaoServicosItemTitle = styled.h3`
  font-size: 3.2rem;
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
      ${({ theme }) => theme.colors.primaryBlue} 0%,
      transparent 100%
    );
  }
`;

export const SecaoServicosItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 1180px) {
    flex-direction: column;
  }
`;

export const SecaoServicosItemDescription = styled.p`
  font-size: 2rem;
  font-weight: 300;
  max-width: 50%;
  color: ${({ theme }) => theme.colors.secondary};

  @media only screen and (max-width: 1180px) {
    max-width: 100%;
  }
`;

export const SecaoServicosItemLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  gap: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding-right: 2rem;
  color: ${({ theme }) => theme.colors.primaryBlue};
  transition: filter 0.4s;

  &::after {
    content: url("./icons/arrow-right.svg");
    width: 4rem;
  }
  
  &:hover {
    filter: brightness(1.1);
  }
`;