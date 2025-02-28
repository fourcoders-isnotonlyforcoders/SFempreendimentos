import { EMAIL, IGLINK, WPLINK } from "../../constants/social";
import {
  FooterBottom,
  FooterBottomCenter,
  FooterBottomCenterText,
  FooterBottomIconRedeSocial,
  FooterBottomLink,
  FooterContainer,
  FooterContato,
  FooterContatoLink,
  FooterContent,
  FooterContentItem,
  FooterContentItemContent,
  FooterContentItemText,
  FooterContentItemTitle,
  FooterIconContato,
  FooterIconLink,
  SecondaryLogo
} from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterContentItem>
          <FooterContentItemTitle>
            <SecondaryLogo src="images/SfPrimary.svg" />
          </FooterContentItemTitle>
          <FooterContentItemText>
            Construtora de alto padrão em RP
          </FooterContentItemText>
        </FooterContentItem>
        <FooterContentItem>
          <FooterContentItemTitle>Redes Sociais</FooterContentItemTitle>
          <FooterContentItemContent>
            <FooterIconLink href={IGLINK} target="_blank">
              <FooterBottomIconRedeSocial src={"./icons/instagram.svg"} />
            </FooterIconLink>
          </FooterContentItemContent>
        </FooterContentItem>
        <FooterContentItem>
          <FooterContentItemTitle>Contato</FooterContentItemTitle>
          <FooterContentItemContent>
            <FooterContatoLink href={WPLINK} target="_blank">
              <FooterContato>
                <FooterIconContato src={"./icons/whatsapp.svg"} />
                <FooterContentItemText>(11) 99999-9999</FooterContentItemText>
              </FooterContato>
            </FooterContatoLink>
            <FooterContatoLink href={`mailto:${EMAIL}`} target="_blank">
              <FooterContato>
                <FooterIconContato src={"./icons/email.svg"} />
                <FooterContentItemText>contato@sf.com.br</FooterContentItemText>
              </FooterContato>
            </FooterContatoLink>
          </FooterContentItemContent>
        </FooterContentItem>
        <FooterContentItem>
          <FooterContentItemTitle>Endereço</FooterContentItemTitle>
          <FooterContentItemText>
            Rua das Flores, 123 - Centro - SP/SP
          </FooterContentItemText>
        </FooterContentItem>
      </FooterContent>
      <FooterBottom>
        <FooterBottomLink to={"/politicas"}>
          Política de Privacidade
        </FooterBottomLink>
        <FooterBottomCenter>
          <FooterBottomCenterText>
            © SF {new Date().getFullYear()}. Todos os direitos reservados.
          </FooterBottomCenterText>
          <FooterBottomLink to="https://fourcoders.com.br">
            Desenvolvido por FourCoders
          </FooterBottomLink>
        </FooterBottomCenter>
        <FooterBottomLink to={"/termos"}>Termos de uso</FooterBottomLink>
      </FooterBottom>
    </FooterContainer>
  );
};
