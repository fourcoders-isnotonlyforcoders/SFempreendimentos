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
  return (
    <SecaoinicialBackground>
      <SecaoInicialContainer>
        <SecaoInicialContent>
          <SecaoInicialTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore
            <SecaoInicialTitleStrong> magna aliqua.</SecaoInicialTitleStrong>
          </SecaoInicialTitle>
          <SecaoInicialDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </SecaoInicialDescription>
          <Button content="Fale Conosco" onClick={() => {}} />
        </SecaoInicialContent>
      </SecaoInicialContainer>
    </SecaoinicialBackground>
  );
};
