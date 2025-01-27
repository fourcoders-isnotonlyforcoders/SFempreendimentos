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
      <NavbarBackground >
        <NavbarContainer>
          <NavbarLogo data-aos="fade-right"/>
          <NavbarMenu>
            <NavbarMenuItem href="#servicos" data-aos="zoom-out-down" data-aos-duration= "200">Serviços</NavbarMenuItem>
            <NavbarMenuItem href="#diferenciais" data-aos="zoom-out-down" data-aos-duration= "300">Diferenciais</NavbarMenuItem>
            <NavbarMenuItem href="#portifolio" data-aos="zoom-out-down" data-aos-duration= "400">Portifólio</NavbarMenuItem>
            <NavbarMenuItem href="#contato" data-aos="zoom-out-down" data-aos-duration= "500">Contato</NavbarMenuItem>
          </NavbarMenu>
          {width > 768 && <Button content="Fale Conosco" onClick={() => {}}  />}
        </NavbarContainer>
      </NavbarBackground>
    </>
  );
};
