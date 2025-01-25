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
            <NavbarMenuItem href="#">link</NavbarMenuItem>
            <NavbarMenuItem href="#">link</NavbarMenuItem>
            <NavbarMenuItem href="#">link</NavbarMenuItem>
            <NavbarMenuItem href="#">link</NavbarMenuItem>
          </NavbarMenu>
          {width > 768 && <Button content="Fale Conosco" onClick={() => {}} />}
        </NavbarContainer>
      </NavbarBackground>
    </>
  );
};
