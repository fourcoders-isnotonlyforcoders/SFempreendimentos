import styled from "styled-components";

export const SecaoinicialBackground = styled.div`
  background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.black} 40%,
      transparent 90%
    ),
    url("./images/bgSf.avif") no-repeat center center;
    background-size: cover;
  background-position: center;
  background-attachment: fixed; 
  height: 90vh;

  @media only screen and (max-width: 1180px) {
    background: linear-gradient(
        to top,
        ${({ theme }) => theme.colors.black} 60%,
        transparent 100%
      ),
      url("./images/bgSf.avif") no-repeat center center;
    background-size: cover; 
    height: 85vh;
  }
`;

export const SecaoInicialContainer = styled.div`
  display: flex;
  max-width: 1350px;
  margin: 0 auto;
  padding: 4rem 7rem;
  height: 100%;
  @media only screen and (max-width: 1180px) {
    padding-bottom: 0;
  }
`;
//TODO: colocar imagem certa depois 

export const SecaoInicialContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 50%;
  height: 100%;
  padding: 0 1rem;

  @media only screen and (max-width: 1180px) {
    width: 100%;
    align-items: center;
    gap: 6rem;
  }
`;

export const SecaoInicialTitle = styled.h1`
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: 1180px) {
    font-size: 2rem;
  }
`;

export const SecaoInicialTitleStrong = styled.strong`
  font-size: 4.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryBlue};

  @media only screen and (max-width: 1180px) {
    font-size: 2rem;
  }
`;

export const SecaoInicialDescription = styled.p`
  font-size: 2rem;
  margin: 0;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  @media only screen and (max-width: 1180px) {
    font-size: 1.5rem;
  }
`;
