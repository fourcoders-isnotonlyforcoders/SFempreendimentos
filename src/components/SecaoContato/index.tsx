import { TituloSecao } from "../TituloSecao";
import {
  SecaoContatoBackground,
  SecaoContatoContainer,
  SecaoContatoContent,
  SecaoContatoStrong,
  SecaoContatoText,
  LastBtn,
} from "./styles";

export const SecaoContato = () => {
  return (
    <SecaoContatoBackground>
      <SecaoContatoContainer>
        <TituloSecao
          titulo={
            <>
              Construímos mais do que projetos, entregamos valor, confiança e a
              base para um <SecaoContatoStrong>futuro sólido.</SecaoContatoStrong>
            </>
          }
          preTitulo="PROPÓSITO"
          align="center"
          color="navyBlue"
        />
        <SecaoContatoContent>
          <SecaoContatoText>
            Cada obra que realizamos representa um sonho transformado em
            realidade. Na SF Empreendimentos, construímos com excelência,
            segurança e compromisso, criando espaços que inspiram e agregam
            valor para gerações. Do primeiro traço ao projeto final, sua visão
            se torna nosso compromisso.
          </SecaoContatoText>
        </SecaoContatoContent>
        <LastBtn>Vamos construir juntos</LastBtn>
      </SecaoContatoContainer>
    </SecaoContatoBackground>
  );
};
