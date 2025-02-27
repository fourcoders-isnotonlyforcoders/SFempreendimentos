import styled from "styled-components";

export const SecaoContatoBackground = styled.div`
  width: 100%;
  background: #f5f5f5;
`;

export const SecaoContatoContainer = styled.div`
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 8rem 12rem;
  gap: 2rem;

  @media only screen and (max-width: 1180px) {
    padding: 5rem 2rem 8rem;
  }
`;

export const SecaoContatoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10rem;

  @media only screen and (max-width: 1180px) {
    padding: 0;
  }
`;

export const SecaoContatoText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.complementaryBlue};
`;

export const SecaoContatoStrong = styled.strong`
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-weight: bold;
`;


export const LastBtn = styled.button`

  border: 2px solid #00115A;
  font-weight: bold;
  color: #5396F3;
  background-color: #00115A;
  font-size: 2.4rem;
  border-radius: 5rem;
  text-align: center;
  cursor: pointer;
  padding: 2rem 8rem;
  transition: 0.2s ease-in-out;
  margin-top: 2rem;
  &:hover{
    transform: scale(1.02);
    box-shadow: 0 0 11px 2px #5396F3;
    filter: brightness(1.1);
  }
`;