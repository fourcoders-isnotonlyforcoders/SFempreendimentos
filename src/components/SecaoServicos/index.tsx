import { TituloSecao } from "../TituloSecao";
import {
  SecaoServicosContainer,
  SecaoServicosItem,
  SecaoServicosItemContent,
  SecaoServicosItemDescription,
  SecaoServicosItemLink,
  SecaoServicosItemsContainer,
  SecaoServicosItemTitle
} from "./styles";

export const SecaoServicos: React.FC = () => {
  return (
    <SecaoServicosContainer id="servicos">
      <TituloSecao
        titulo="Conheça nossos serviços"
        preTitulo="Atuação"
        align="left"
        color="white"
      />
      <SecaoServicosItemsContainer>
        <SecaoServicosItem >
          <SecaoServicosItemTitle data-aos="fade-right" data-aos-duration="550" >Construção</SecaoServicosItemTitle>
          <SecaoServicosItemContent>
            <SecaoServicosItemDescription data-aos="fade-right" data-aos-duration="500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </SecaoServicosItemDescription>
            <SecaoServicosItemLink data-aos="fade-left" data-aos-duration="500">Saiba mais</SecaoServicosItemLink>
          </SecaoServicosItemContent>
        </SecaoServicosItem>
        <SecaoServicosItem>
          <SecaoServicosItemTitle data-aos="fade-right" data-aos-duration="650">Construção</SecaoServicosItemTitle>
          <SecaoServicosItemContent>
            <SecaoServicosItemDescription data-aos="fade-right" data-aos-duration="600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </SecaoServicosItemDescription>
            <SecaoServicosItemLink data-aos="fade-left" data-aos-duration="600">Saiba mais</SecaoServicosItemLink>
          </SecaoServicosItemContent>
        </SecaoServicosItem>
        <SecaoServicosItem>
          <SecaoServicosItemTitle data-aos="fade-right" data-aos-duration="750">Construção</SecaoServicosItemTitle>
          <SecaoServicosItemContent>
            <SecaoServicosItemDescription data-aos="fade-right" data-aos-duration="700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </SecaoServicosItemDescription>
            <SecaoServicosItemLink data-aos="fade-left" data-aos-duration="700">Saiba mais</SecaoServicosItemLink>
          </SecaoServicosItemContent>
        </SecaoServicosItem>
      </SecaoServicosItemsContainer>
    </SecaoServicosContainer>
  );
};
