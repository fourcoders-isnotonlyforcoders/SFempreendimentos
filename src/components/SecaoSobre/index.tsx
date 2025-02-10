import React from "react";
import { TituloSecao } from "../TituloSecao";
import {
  SobreCenter,
  SobreContainer,
  SobreImg,
  SobreLeft,
  SobreParagraph,
  SobreRight
} from "./styles";
import { Button } from "../Button";
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
        <SobreParagraph data-aos="fade-right" data-aos-duration="500">
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
        <Button
          content="LEIA MAIS"
          onClick={() => {}}
          size="large"
          data-aos="fade-up-right"
          data-aos-duration="500"
          customStyle="outline"
        />
      </SobreLeft>
      <SobreCenter data-aos="zoom-in" data-aos-duration="500"></SobreCenter>
      <SobreRight>
        <SobreImg
          src="./images/house-2.avif"
          data-aos="fade-up-left"
          data-aos-duration="500"
        ></SobreImg>
      </SobreRight>
    </SobreContainer>
  );
};
