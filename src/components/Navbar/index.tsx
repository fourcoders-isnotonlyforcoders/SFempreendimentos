import React from "react";
import {
  NavbarBackground,
  NavbarContainer,
  NavbarMenu,
  NavbarMenuItem
} from "./style";
import { NavbarLogo } from "../NavbarLogo";
import { Button } from "../Button";
import { useWindowDimensions } from "../../../utils/useWindowDimensions";

export const Navbar: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <NavbarBackground>
        <NavbarContainer>
          <NavbarLogo />
          <NavbarMenu>
            <NavbarMenuItem href="#servicos">Serviços</NavbarMenuItem>
            <NavbarMenuItem href="#diferenciais">Diferenciais</NavbarMenuItem>
            <NavbarMenuItem href="#portifolio">Portifólio</NavbarMenuItem>
            <NavbarMenuItem href="#contato">Contato</NavbarMenuItem>
          </NavbarMenu>
          {width > 768 && <Button content="Fale Conosco" onClick={() => {}} />}
        </NavbarContainer>
      </NavbarBackground>
    </>
  );
};
