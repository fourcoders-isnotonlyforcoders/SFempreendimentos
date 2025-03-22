import { DIFERENCIAIS } from "../../constants/diferenciais";
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
          color="black"
        />
        <SecaoDiferenciaisCardsContainer>
          {DIFERENCIAIS.map(({ icon, titulo, descricao }, index) => (
            <SecaoDiferenciaisCard
              key={index}
              data-aos="zoom-out"
              data-aos-duration="500"
            >
              <SecaoDiferenciaisCardIcon src={icon} />
              <SecaoDiferenciaisCardTitle>{titulo}</SecaoDiferenciaisCardTitle>
              <SecaoDiferenciaisCardDescription>
                {descricao}
              </SecaoDiferenciaisCardDescription>
            </SecaoDiferenciaisCard>
          ))}
        </SecaoDiferenciaisCardsContainer>
      </SecaoDiferenciaisContainer>
    </SecaoDiferenciaisBackground>
  );
};
  