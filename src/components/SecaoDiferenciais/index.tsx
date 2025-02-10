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

type DiferenciaisCardType = {
  icon: string;
  titulo: string;
  descricao: string;
};

const DIFERENCIAIS: DiferenciaisCardType[] = [
  {
    icon: "./icons/building.svg",
    titulo: "Excelência",
    descricao:
      "Acabamentos impecáveis, materiais nobres e atenção aos mínimos detalhes."
  },
  {
    icon: "./icons/diamond.svg",
    titulo: "Exclusividade",
    descricao:
      "Projetos personalizados para atender perfeitamente às necessidades e desejos do cliente."
  },
  {
    icon: "./icons/clock.svg",
    titulo: "Pontualidade",
    descricao:
      "Cumprimento rigoroso dos prazos sem comprometer a qualidade da obra."
  },
  {
    icon: "./icons/leaf.svg",
    titulo: "Sustentabilidade",
    descricao:
      "Uso de tecnologias e materiais que reduzem impactos ambientais e elevam a eficiência."
  }
];

export const SecaoDiferenciais = () => {
  return (
    <SecaoDiferenciaisBackground>
      <SecaoDiferenciaisContainer id="diferenciais">
        <TituloSecao
          titulo="Por que nos contratar ?"
          preTitulo="DIFERENCIAIS"
          align="center"
          color="black200"
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
