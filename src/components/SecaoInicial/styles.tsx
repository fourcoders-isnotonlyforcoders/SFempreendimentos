import styled from "styled-components";

export const SecaoinicialBackground = styled.div`
  background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.secondary} 40%,
      transparent 80%
    ),
    url("./house-img.avif") no-repeat top right;
  background-size: contain;
  height: 95vh;

  @media only screen and (max-width: 1180px) {
    background: linear-gradient(
        to top,
        ${({ theme }) => theme.colors.secondary} 60%,
        transparent 100%
      ),
      url("./house-img.avif") no-repeat top center;
    background-size: contain;
    height: 85vh;
  }
`;

export const SecaoInicialContainer = styled.div`
  display: flex;
  max-width: 1350px;
  margin: 0 auto;
  padding: 5.875rem 1.5rem;
  height: 100%;

  @media only screen and (max-width: 1180px) {
    padding-bottom: 0;
  }
`;

export const SecaoInicialContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.875rem;
  width: 50%;
  height: 100%;

  @media only screen and (max-width: 1180px) {
    width: 100%;
    align-items: center;
    gap: 6rem;
  }
`;

export const SecaoInicialTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: 1180px) {
    font-size: 2rem;
  }
`;

export const SecaoInicialTitleStrong = styled.strong`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary};

  @media only screen and (max-width: 1180px) {
    font-size: 2rem;
  }
`;

export const SecaoInicialDescription = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: 1180px) {
    font-size: 1.5rem;
  }
`;
