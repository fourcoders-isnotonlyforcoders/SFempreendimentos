import { useState } from "react";
import { TituloSecao } from "../TituloSecao";
import {
  AccordionCard,
  AccordionCardIcon,
  AccordionContainer,
  AccordionContentContainer,
  AccordionTitle,
  AccordionTitleContainer,
  SecaoDuvidasBackground,
  SecaoDuvidasContainer
} from "./styles";

export const SecaoDuvidas: React.FC = () => {
  const [active, setActive] = useState<number>();
  return (
    <SecaoDuvidasBackground>
      <SecaoDuvidasContainer>
        <TituloSecao
          align="center"
          color="black"
          preTitulo="Dúvidas"
          titulo="Dúvidas frequentes de nossos clientes"
        />
        <AccordionContainer>
          <AccordionTitleContainer>
            <AccordionTitle>Dúvidas Frequentes</AccordionTitle>
          </AccordionTitleContainer>
          <AccordionContentContainer>
            {[...Array(6)].map((_, index) => (
              <AccordionCard
                key={index}
                onClick={() =>
                  active === index ? setActive(undefined) : setActive(index)
                }
                active={index === active}
              >
                test <br></br>
                <AccordionCardIcon
                  src="./icons/simple-arrow-left.svg" // TODO: Alterar para outra 'Seta'
                  active={index === active}
                />
              </AccordionCard>
            ))}
          </AccordionContentContainer>
        </AccordionContainer>
      </SecaoDuvidasContainer>
    </SecaoDuvidasBackground>
  );
};
