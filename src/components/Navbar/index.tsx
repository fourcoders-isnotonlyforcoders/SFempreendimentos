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
          <NavbarLogo data-aos="fade-right" />
          <NavbarMenu>
            <NavbarMenuItem
              href="#servicos"
              data-aos="zoom-out-down"
              transition="0.2s"
            >
              Serviços
            </NavbarMenuItem>
            <NavbarMenuItem
              href="#diferenciais"
              data-aos="zoom-out-down"
              transition="0.3s"
            >
              Diferenciais
            </NavbarMenuItem>
            <NavbarMenuItem
              href="#portifolio"
              data-aos="zoom-out-down"
              transition="0.4s"
            >
              Portifólio
            </NavbarMenuItem>
            <NavbarMenuItem
              href="#contato"
              data-aos="zoom-out-down"
              transition="0.5s"
            >
              Contato
            </NavbarMenuItem>
          </NavbarMenu>
          {width > 768 && <Button content="Fale Conosco" onClick={() => {}} />}
        </NavbarContainer>
      </NavbarBackground>
    </>
  );
};
