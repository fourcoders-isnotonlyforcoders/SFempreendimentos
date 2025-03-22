import { Button } from "../Button";
import { TituloSecao } from "../TituloSecao";
import { SecaoPortifolioContainer } from "./styles";
import { Carrousel } from "../SecaoCarrousel/Carrousel";
import { WPLINK } from "../../constants/social";
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
      <Carrousel />
      <Button
        content="Inicie seu projeto agora"
        onClick={() => window.open(WPLINK)}
        size="large"
      />
    </SecaoPortifolioContainer>
  );
};
