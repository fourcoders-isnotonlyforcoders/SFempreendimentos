import React from "react";
import { LogoBox, NavbarContainer, NavLink, NavBtn } from "./style";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <LogoBox>Logo</LogoBox>
      <NavLink>Links</NavLink>
      <NavBtn>Button</NavBtn>
    </NavbarContainer>
  );
};
