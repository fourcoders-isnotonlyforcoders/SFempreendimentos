import { TituloSecao } from "../TituloSecao"
import { SecaoFormContainer } from "./styles"
export const SecaoForm: React.FC = () => {
  return (
    <SecaoFormContainer>
              <TituloSecao
          titulo="Vamos concretizar seu próximo grande projeto ? "
          preTitulo="CONTATO"
          align="center"
          color="white"
        />
    </SecaoFormContainer>

  )
}
