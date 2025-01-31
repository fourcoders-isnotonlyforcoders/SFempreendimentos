import { useWindowDimensions } from "../../../utils/useWindowDimensions";
import { Button } from "../Button";
import {
  SecaoinicialBackground,
  SecaoInicialContainer,
  SecaoInicialContent,
  SecaoInicialDescription,
  SecaoInicialTitle,
  SecaoInicialTitleStrong
} from "./styles";

export const SecaoInicial: React.FC = () => {
  const { width } = useWindowDimensions();
  return (
    <SecaoinicialBackground data-aos="zoom-out" data-aos-duration="300">
      <SecaoInicialContainer>
        <SecaoInicialContent>
          <SecaoInicialTitle data-aos="fade-up-right" data-aos-duration="600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore
            <SecaoInicialTitleStrong> magna aliqua.</SecaoInicialTitleStrong>
          </SecaoInicialTitle>
          <SecaoInicialDescription
            data-aos="fade-right"
            data-aos-duration="600"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </SecaoInicialDescription>
          <Button
            content="Fale Conosco"
            onClick={() => {}}
            size={width < 1180 ? "large" : "medium"}
          />
        </SecaoInicialContent>
      </SecaoInicialContainer>
    </SecaoinicialBackground>
  );
};
