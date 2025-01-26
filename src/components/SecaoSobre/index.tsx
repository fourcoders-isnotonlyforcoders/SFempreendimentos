/** @format */

import React from "react";
import { TituloSecao } from "../TituloSecao";
import {
  SobreButton,
  SobreCenter,
  SobreContainer,
  SobreImg,
  SobreLeft,
  SobreParagraph,
  SobreRight,
} from "./styles";
export const SecaoSobre: React.FC = () => {
  return (
    <SobreContainer>
      <SobreLeft>
        <TituloSecao
          titulo="SF Empreendimentos "
          preTitulo="SOBRE NÓS"
          align="left"
          color="white"
        />
        <SobreParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </SobreParagraph>
        <SobreButton>LEIA MAIS</SobreButton>
      </SobreLeft>
      <SobreCenter></SobreCenter>
      <SobreRight>
        <SobreImg src="/house-2.avif"></SobreImg>
      </SobreRight>
    </SobreContainer>
  );
};
