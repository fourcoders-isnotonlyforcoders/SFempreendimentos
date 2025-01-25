import { Button } from "../Button";
import { TituloSecao } from "../TituloSecao";
import {
  SecaoPortifolioCard,
  SecaoPortifolioCardImage,
  SecaoPortifolioCardsContainer,
  SecaoPortifolioContainer
} from "./styles";

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
      <SecaoPortifolioCardsContainer>
        {[...Array(6)].map((_, index) => (
          <SecaoPortifolioCard key={index}>
            <SecaoPortifolioCardImage src="./house-img.avif" />
          </SecaoPortifolioCard>
        ))}
      </SecaoPortifolioCardsContainer>
      <Button content="Saiba mais" onClick={() => {}} size="large" />
    </SecaoPortifolioContainer>
  );
};
