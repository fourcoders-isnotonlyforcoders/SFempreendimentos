import { Button } from "../Button";
import { TituloSecao } from "../TituloSecao";
import {
  SecaoPortifolioContainer
} from "./styles";
import { Carrousel } from "../SecaoCarrousel/Carrousel";
export const SecaoPortifolio = () => {
  return (
    <SecaoPortifolioContainer>
      <TituloSecao
        titulo="Conheça nosso portfólio "
        preTitulo="DESTAQUES"
        align="center"
        color="white"
        id="portifolio"
      />
      <Carrousel/>
      <Button content="Inicie seu Projeto agora" onClick={() => {}} size="large" />
    </SecaoPortifolioContainer>
  );
};
