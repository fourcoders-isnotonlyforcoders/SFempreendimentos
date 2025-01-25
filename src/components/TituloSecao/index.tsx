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
  color
}) => {
  return (
    <TituloSecaoContainer align={align} color={color}>
      <PreTituloSecao>{preTitulo.toUpperCase()}</PreTituloSecao>
      <TituloSecaoComponent>{titulo}</TituloSecaoComponent>
    </TituloSecaoContainer>
  );
};
