import { useWindowDimensions } from "../../../utils/useWindowDimensions";
import { Button } from "../Button";
import {
  SecaoinicialBackground,
  SecaoInicialContainer,
  SecaoInicialContent,
  SecaoInicialDescription,
  SecaoInicialTitle,
  SecaoInicialTitleStrong,
} from "./styles";

export const SecaoInicial: React.FC = () => {
  const { width } = useWindowDimensions();
  return (
    <SecaoinicialBackground data-aos="zoom-out" data-aos-duration="300">
      <SecaoInicialContainer>
        <SecaoInicialContent>
          <SecaoInicialTitle data-aos="fade-up-right" data-aos-duration="600">
            Bem-vindo à excelência em construções de alto padrão
            <SecaoInicialTitleStrong>
              {" "}
              SF Empreendimentos
            </SecaoInicialTitleStrong>
          </SecaoInicialTitle>
          <SecaoInicialDescription
            data-aos="fade-right"
            data-aos-duration="600"
          >
            Do planejamento à entrega, oferecemos soluções completas em
            construção, reforma e demolição. Com inovação, qualidade e
            compromisso, transformamos cada projeto em uma realidade sólida e
            duradoura.
          </SecaoInicialDescription>
          <Button
            content="Fale com um consultor"
            onClick={() => {}}
            size={width < 1180 ? "large" : "medium"}
          />
        </SecaoInicialContent>
      </SecaoInicialContainer>
    </SecaoinicialBackground>
  );
};
