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
        <SecaoServicosItem>
          <SecaoServicosItemTitle>Construção</SecaoServicosItemTitle>
          <SecaoServicosItemContent>
            <SecaoServicosItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </SecaoServicosItemDescription>
            <SecaoServicosItemLink>Saiba mais</SecaoServicosItemLink>
          </SecaoServicosItemContent>
        </SecaoServicosItem>
        <SecaoServicosItem>
          <SecaoServicosItemTitle>Construção</SecaoServicosItemTitle>
          <SecaoServicosItemContent>
            <SecaoServicosItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </SecaoServicosItemDescription>
            <SecaoServicosItemLink>Saiba mais</SecaoServicosItemLink>
          </SecaoServicosItemContent>
        </SecaoServicosItem>
        <SecaoServicosItem>
          <SecaoServicosItemTitle>Construção</SecaoServicosItemTitle>
          <SecaoServicosItemContent>
            <SecaoServicosItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </SecaoServicosItemDescription>
            <SecaoServicosItemLink>Saiba mais</SecaoServicosItemLink>
          </SecaoServicosItemContent>
        </SecaoServicosItem>
      </SecaoServicosItemsContainer>
    </SecaoServicosContainer>
  );
};
