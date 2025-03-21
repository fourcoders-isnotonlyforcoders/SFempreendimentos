import React from "react";
import { TituloSecao } from "../TituloSecao";
import {
  SobreContainer,
  SobreImg,
  SobreLeft,
  SobreParagraph,
  SobreRight,
  CardsContainer,
  PrincipalContainer,
  Card,
  Icon,
  Infos,
  Sub,
  Title,
} from "./styles";
import { Button } from "../Button";
import { WPLINK } from "../../constants/social";
export const SecaoSobre: React.FC = () => {
  return (
    <PrincipalContainer>
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
            cada etapa do processo. Nossa missão é entregar mais do que um
            imóvel; é criar lares que acolham famílias e permitam que elas
            construam memórias duradouras. Cada detalhe é cuidadosamente
            planejado e executado para garantir que o resultado supere suas
            expectativas. Trabalhamos em estreita colaboração com nossos
            clientes, entendendo suas necessidades e sonhos, para criar espaços
            que reflitam sua identidade. Na SF Empreendimentos, transformamos
            seu sonho em realidade, com a segurança e confiança que você e sua
            família merecem. Juntos, vamos construir o futuro que você sempre
            desejou.
          </SobreParagraph>
        </SobreLeft>
        <SobreRight>
          <SobreImg
            src="./images/familyImage.avif"
            data-aos="fade-up-left"
            data-aos-duration="500"
          ></SobreImg>
        </SobreRight>
      </SobreContainer>
      <CardsContainer>
        <Card>
          <Icon src="/public/icons/target.svg" />
          <Infos>
            <Title>Missão</Title>
            <Sub>
              Nosso compromisso é entregar soluções em construção com qualidade,
              conforto e segurança, respeitando prazos e buscando sempre superar
              as expectativas de nossos clientes, garantindo resultados
              confiáveis e duradouros.
            </Sub>
          </Infos>
        </Card>
        <Card>
          <Icon src="/public/icons/eye.svg" />
          <Infos>
            <Title>Visão</Title>
            <Sub>
              Ser a principal referência no setor de construção, reconhecida por
              oferecer projetos de alto padrão que combinam inovação, segurança
              e conforto, conquistando a confiança de nossos clientes e
              parceiros em todas as etapas.
            </Sub>
          </Infos>
        </Card>
        <Card>
          <Icon src="/public/icons/diamonds-four.svg" />
          <Infos>
            <Title>Valores</Title>
            <Sub>
              Nossa atuação é pautada pela ética, transparência e
              comprometimento com a qualidade, buscando sempre oferecer
              conforto, confiança e excelência em cada projeto, respeitando o
              meio ambiente e garantindo satisfação..
            </Sub>
          </Infos>
        </Card>
      </CardsContainer>
      <Button
        content="Faça parte dessa história"
        onClick={() => window.open(WPLINK)}
        size="large"
        data-aos="fade-up-right"
        data-aos-duration="500"
        customStyle="outline"
      />
    </PrincipalContainer>
  );
};
