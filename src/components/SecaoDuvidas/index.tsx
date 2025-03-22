import { useState } from "react";
import {
  AccordionCard,
  AccordionCardContent,
  AccordionCardIcon,
  AccordionCardPreviewContainer,
  AccordionCardTitle,
  AccordionContainer,
  AccordionContentContainer,
  AccordionTitle,
  AccordionTitleContainer,
  SecaoDuvidasBackground,
  SecaoDuvidasContainer,
  AccordionPreText
} from "./styles";
import { DUVIDAS } from "../../constants/duvidas";

export const SecaoDuvidas: React.FC = () => {
  const [active, setActive] = useState<number>();
  return (
    <SecaoDuvidasBackground>
      <SecaoDuvidasContainer>
        <AccordionContainer>
          <AccordionTitleContainer>
            <AccordionTitle data-aos="fade-right" data-aos-duration="500">
              <AccordionPreText>
                FAQ
              </AccordionPreText>
              Dúvidas Frequentes
            </AccordionTitle>
          </AccordionTitleContainer>
          <AccordionContentContainer>
            {DUVIDAS.map(({ title, content }, index) => (
              <AccordionCard
                key={index}
                onClick={() =>
                  active === index ? setActive(undefined) : setActive(index)
                }
                data-aos="fade-left"
                data-aos-duration={index + 3 + "00"}
              >
                <AccordionCardPreviewContainer>
                  <AccordionCardTitle>{title}</AccordionCardTitle>
                  <AccordionCardIcon
                    src="./icons/simple-arrow-bottom.svg"
                    active={index === active}
                  />
                </AccordionCardPreviewContainer>
                <AccordionCardContent active={active === index}>
                  {content}
                </AccordionCardContent>
              </AccordionCard>
            ))}
          </AccordionContentContainer>
        </AccordionContainer>
      </SecaoDuvidasContainer>
    </SecaoDuvidasBackground>
  );
};
