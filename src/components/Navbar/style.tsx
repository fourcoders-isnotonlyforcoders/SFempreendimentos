import styled from "styled-components";

export const NavbarContainer = styled.div`
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  border: 1.5px solid ${({ theme }) => theme.colors.offWhite};
`;

export const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const NavbarMenuItem = styled.a`
  font-size: 1.875rem;
  font-weight: bold;
  filter: brightness(0.5);
  transition: filter 0.4s;

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
`;

export const NavbarContact = styled.a`
  font-size: 1.875rem;
  font-weight: bold;
`;
