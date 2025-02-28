import React from "react";
import { TituloSecao } from "../TituloSecao";
import {
  SobreContainer,
  SobreImg,
  SobreLeft,
  SobreParagraph,
  SobreRight
} from "./styles";
import { Button } from "../Button";
import { WPLINK } from "../../constants/social";
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
          Na SF Empreendimentos, acreditamos que cada projeto vai além de
          estruturas de concreto: é a realização de um sonho. Com anos de
          experiência, nossa equipe é composta por profissionais comprometidos
          com a qualidade, transparência e confiança, valores que prezamos em
          cada etapa do processo. Nossa missão é entregar mais do que um imóvel;
          é criar lares que acolham famílias e permitam que elas construam
          memórias duradouras. Cada detalhe é cuidadosamente planejado e
          executado para garantir que o resultado supere suas expectativas.
          Trabalhamos em estreita colaboração com nossos clientes, entendendo
          suas necessidades e sonhos, para criar espaços que reflitam sua
          identidade. Na SF Empreendimentos, transformamos seu sonho em
          realidade, com a segurança e confiança que você e sua família merecem.
          Juntos, vamos construir o futuro que você sempre desejou.
        </SobreParagraph>
        <Button
          content="Faça parte dessa história"
          onClick={() => window.open(WPLINK)}
          size="large"
          data-aos="fade-up-right"
          data-aos-duration="500"
          customStyle="outline"
        />
      </SobreLeft>
      <SobreRight>
        <SobreImg
          src="./images/familyImage.avif"
          data-aos="fade-up-left"
          data-aos-duration="500"
        ></SobreImg>
      </SobreRight>
    </SobreContainer>
  );
};
