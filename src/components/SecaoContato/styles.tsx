import styled from "styled-components";

export const SecaoContatoBackground = styled.div`
  width: 100%;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.white} 0%,
    ${({ theme }) => theme.colors.black} 99%
  );
`;

export const SecaoContatoContainer = styled.div`
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 9rem 12rem;
  gap: 4rem;

  @media only screen and (max-width: 1180px) {
    padding: 5rem 2rem 8rem;
  }
`;

export const SecaoContatoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10.25rem;

  @media only screen and (max-width: 1180px) {
    padding: 0;
  }
`;

export const SecaoContatoText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

export const SecaoContatoStrong = styled.strong`
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-weight: bold;
`;
