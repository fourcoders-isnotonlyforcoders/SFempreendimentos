import styled from "styled-components";

export const SecaoServicosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1350px;
  width: 100%;
  margin: 0 auto;
  padding: 10rem 8rem 15rem;
  gap: 3rem;
  @media (max-width: 1180px) {
    padding: 4rem 2rem;
    gap: 2rem;
  }
`;

export const SecaoServicosItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  gap: 2rem;
  @media (max-width: 1180px) {
    gap: 4rem;
  }
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
  @media (max-width: 1180px) {
    gap: 2rem;
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
    @media (max-width: 1180px) {
    margin-top: 1rem;
  }
  }
  @media (max-width: 1180px) {
    font-size: 2.8rem;
  }
`;

export const SecaoServicosItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 1180px) {
    flex-direction: column;
  }
`;

export const SecaoServicosItemDescription = styled.p`
  font-size: 2rem;
  font-weight: 300;
  max-width: 60%;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.secondary};
  @media only screen and (max-width: 1180px) {
    max-width: 100%;
  }
`;

export const SecaoServicosItemLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 2.1rem;
  gap: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding-right: 2rem;
  color: ${({ theme }) => theme.colors.primaryBlue};
  transition: all 0.4s ease-in-out;
  opacity: 0.9;
  &::after {
    content: url("./icons/arrow-right.svg");
    width: 4rem;
  }

  &:hover {
    filter: brightness(1.1);
    opacity: 1;
  }
  @media (max-width: 1180px) {
    padding: 1rem 0;
  }
`;
