import React from "react";
import {
  NavbarContact,
  NavbarContainer,
  NavbarMenu,
  NavbarMenuItem
} from "./style";
import { NavbarLogo } from "../NavbarLogo";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarLogo />
      <NavbarMenu>
        <NavbarMenuItem href="#">link</NavbarMenuItem>
        <NavbarMenuItem href="#">link</NavbarMenuItem>
        <NavbarMenuItem href="#">link</NavbarMenuItem>
        <NavbarMenuItem href="#">link</NavbarMenuItem>
      </NavbarMenu>
      <NavbarContact href="#">Fale Conosco</NavbarContact>
    </NavbarContainer>
  );
};
