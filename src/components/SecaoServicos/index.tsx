import { SERVICOS } from "../../constants/servicos";
import { WPLINK } from "../../constants/social";
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
        {SERVICOS.map((servico, index) => (
          <SecaoServicosItem key={index}>
            <SecaoServicosItemTitle
              data-aos="fade-right"
              data-aos-duration={servico.dataAosDuration}
            >
              {servico.title}
            </SecaoServicosItemTitle>
            <SecaoServicosItemContent>
              <SecaoServicosItemDescription
                data-aos="fade-right"
                data-aos-duration={(
                  Number(servico.dataAosDuration) - 50
                ).toString()}
              >
                {servico.description}
              </SecaoServicosItemDescription>
              <SecaoServicosItemLink
                data-aos="fade-left"
                data-aos-duration={(
                  Number(servico.dataAosDuration) - 50
                ).toString()}
                href={WPLINK}
                target="_blank"
              >
                Saiba mais
              </SecaoServicosItemLink>
            </SecaoServicosItemContent>
          </SecaoServicosItem>
        ))}
      </SecaoServicosItemsContainer>
    </SecaoServicosContainer>
  );
};
