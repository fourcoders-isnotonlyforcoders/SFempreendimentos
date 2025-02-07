import { TituloSecao } from "../TituloSecao";
import { Carrousel } from "./Carrosel";
import {
  SecaoDepoimentosBackground,
  SecaoDepoimentosContainer,
  SecaoDepoimentosContent
} from "./styles";

export const SecaoDepoimentos = () => {
  return (
    <SecaoDepoimentosBackground>
      <SecaoDepoimentosContainer>
        <TituloSecao
          titulo="O que nossos clientes dizem ?"
          preTitulo="DEPOIMENTOS"
          align="center"
          color="black100"
        />
        <SecaoDepoimentosContent>
          <Carrousel />
        </SecaoDepoimentosContent>
      </SecaoDepoimentosContainer>
    </SecaoDepoimentosBackground>
  );
};
