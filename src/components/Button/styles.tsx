import styled from "styled-components";

export const ButtonComponent = styled.div`
  background: ${({ theme }) => theme.colors.third};
  color: ${({ theme }) => theme.colors.black};
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem 6rem;
  border-radius: 33px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem 3rem;
  }
`;
