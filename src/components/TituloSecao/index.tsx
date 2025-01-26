import {
  PreTituloSecao,
  TituloSecaoContainer,
  TituloSecao as TituloSecaoComponent
} from "./styles";
import { TituloSecaoProps } from "./types";

export const TituloSecao: React.FC<TituloSecaoProps> = ({
  titulo,
  preTitulo,
  align,
  color,
  id
}) => {
  return (
    <TituloSecaoContainer align={align} color={color} id={id}>
      <PreTituloSecao data-aos="fade-up-right" data-aos-duration="400">{preTitulo.toUpperCase()}</PreTituloSecao>
      <TituloSecaoComponent data-aos="zoom-out-up" data-aos-duration="500">{titulo}</TituloSecaoComponent>
    </TituloSecaoContainer>
  );
};
