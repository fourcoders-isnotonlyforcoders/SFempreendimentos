import { Button } from "../Button";
import { TituloSecao } from "../TituloSecao";
import {
  SecaoContatoBackground,
  SecaoContatoContainer,
  SecaoContatoContent,
  SecaoContatoStrong,
  SecaoContatoText
} from "./styles";

export const SecaoContato = () => {
  return (
    <SecaoContatoBackground>
      <SecaoContatoContainer>
        <TituloSecao
          titulo={
            <>
              Construir com a SF Empreendimentos é garantia de uma obra de
              <SecaoContatoStrong> alto padrão </SecaoContatoStrong>
              feita sob medida para você
            </>
          }
          preTitulo="CONTATO"
          align="center"
          color="black200"
        />
        <SecaoContatoContent>
          <SecaoContatoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et
          </SecaoContatoText>
        </SecaoContatoContent>
        <Button content="ENTRAR EM CONTATO" onClick={() => {}} size="large" />
      </SecaoContatoContainer>

    </SecaoContatoBackground>
  );
};
