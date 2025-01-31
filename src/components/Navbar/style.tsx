import styled from "styled-components";

export const NavbarBackground = styled.div`
  border: 1.5px solid ${({ theme }) => theme.colors.offWhite};
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1350px;
  margin: 0 auto;
  padding: 2rem 4rem;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const NavbarMenuItem = styled.a<{ transition: string }>`
  font-size: 1.875rem;
  font-weight: bold;
  filter: brightness(0.5);
  transition: filter 0.4s, opacity ${({ transition }) => transition},
    transform ${({ transition }) => transition} !important;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.4s;
    border-radius: 4px;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    filter: brightness(1);
  }

  @media (max-width: 1180px) {
    font-size: 1.5rem;
  }
`;
