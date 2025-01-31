import { TituloSecao } from "../TituloSecao";
import { Carrousel } from "./Carrosel";
import { SecaoDepoimentosContainer, SecaoDepoimentosContent } from "./styles";

export const SecaoDepoimentos = () => {
  return (
    <SecaoDepoimentosContainer>
      <TituloSecao
        titulo="O que nossos clientes dizem ?"
        preTitulo="DEPOIMENTOS"
        align="center"
        color="secondary"
      />
      <SecaoDepoimentosContent>
        <Carrousel />
      </SecaoDepoimentosContent>
    </SecaoDepoimentosContainer>
  );
};
