import React from "react";
import {
  NavbarBackground,
  NavbarContainer,
  NavbarMenu,
  NavbarMenuItem
} from "./style";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { useWindowDimensions } from "../../../utils/useWindowDimensions";
import { NavbarProps } from "./types";

export const Navbar: React.FC<NavbarProps> = ({ readonly = false }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <NavbarBackground>
        <NavbarContainer>
          <Logo data-aos="fade-right" />
          {!readonly && (
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
          )}
          {width > 768 && <Button content="Fale Conosco" onClick={() => {}} />}
        </NavbarContainer>
      </NavbarBackground>
    </>
  );
};
