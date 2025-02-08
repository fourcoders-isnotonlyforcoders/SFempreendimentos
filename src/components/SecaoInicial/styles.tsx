import styled from "styled-components";

export const SecaoinicialBackground = styled.div`
  background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.black100} 40%,
      transparent 80%
    ),
    url("./house-img.avif") no-repeat top right;
  background-size: contain;
  height: 95vh;

  @media only screen and (max-width: 1180px) {
    background: linear-gradient(
        to top,
        ${({ theme }) => theme.colors.black100} 60%,
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
  padding: 5.875rem 8rem;
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
  width: 55%;
  height: 100%;
  padding: 0 1rem;

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
  margin: 0;
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: 1180px) {
    font-size: 2rem;
  }
`;

export const SecaoInicialTitleStrong = styled.strong`
  font-size: 3.3rem;
  font-weight: bold;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.primaryblue};

  @media only screen and (max-width: 1180px) {
    font-size: 2rem;
  }
`;

export const SecaoInicialDescription = styled.p`
  font-size: 1.8rem;
  margin: 0;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secundary};

  @media only screen and (max-width: 1180px) {
    font-size: 1.5rem;
  }
`;
