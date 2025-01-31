import styled from "styled-components";

export const SecaoContatoBackground = styled.div`
  width: 100%;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.white} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
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
  gap: 3rem;
  padding: 9rem 12rem;
`;

export const SecaoContatoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10.25rem;
  margin-bottom: 5rem;
`;

export const SecaoContatoText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SecaoContatoStrong = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
`;
