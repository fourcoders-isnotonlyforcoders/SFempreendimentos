import { TituloSecao } from "../TituloSecao";
import {
  SecaoDiferenciaisBackground,
  SecaoDiferenciaisCard,
  SecaoDiferenciaisCardDescription,
  SecaoDiferenciaisCardIcon,
  SecaoDiferenciaisCardsContainer,
  SecaoDiferenciaisCardTitle,
  SecaoDiferenciaisContainer
} from "./styles";

export const SecaoDiferenciais = () => {
  return (
    <SecaoDiferenciaisBackground>
      <SecaoDiferenciaisContainer id="diferenciais">
        <TituloSecao
          titulo="Por que nos contratar ?"
          preTitulo="DIFERENCIAIS"
          align="center"
          color="black100"
        />
        <SecaoDiferenciaisCardsContainer>
          {[...Array(4)].map((_, index) => (
            <SecaoDiferenciaisCard
              key={index}
              data-aos="zoom-out"
              data-aos-duration="500"
            >
              <SecaoDiferenciaisCardIcon src="./worker.svg" />
              <SecaoDiferenciaisCardTitle>Prazos</SecaoDiferenciaisCardTitle>
              <SecaoDiferenciaisCardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod
              </SecaoDiferenciaisCardDescription>
            </SecaoDiferenciaisCard>
          ))}
        </SecaoDiferenciaisCardsContainer>
      </SecaoDiferenciaisContainer>
    </SecaoDiferenciaisBackground>
  );
};
