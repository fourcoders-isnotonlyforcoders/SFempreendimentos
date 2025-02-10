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
  FooterIconLink
} from "./styles";
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterContentItem>
          <FooterContentItemTitle>
            <Logo />
          </FooterContentItemTitle>
          <FooterContentItemText>
            Construtora de alto padrão em RP
          </FooterContentItemText>
        </FooterContentItem>
        <FooterContentItem>
          <FooterContentItemTitle>Redes Sociais</FooterContentItemTitle>
          <FooterContentItemContent>
            <FooterIconLink href="">
              <FooterBottomIconRedeSocial src={"./icons/instagram.svg"} />
            </FooterIconLink>
          </FooterContentItemContent>
        </FooterContentItem>
        <FooterContentItem>
          <FooterContentItemTitle>Contato</FooterContentItemTitle>
          <FooterContentItemContent>
            <FooterContatoLink>
              <FooterContato>
                <FooterIconContato src={"./icons/whatsapp.svg"} />
                <FooterContentItemText>(11) 99999-9999</FooterContentItemText>
              </FooterContato>
            </FooterContatoLink>
            <FooterContatoLink>
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
        <FooterBottomLink>Política de Privacidade</FooterBottomLink>
        <FooterBottomCenter>
          <FooterBottomCenterText>
            © SF {new Date().getFullYear()}. Todos os direitos reservados.
          </FooterBottomCenterText>
          <FooterBottomLink href="https://fourcoders.com.br">
            Desenvolvido por FourCoders
          </FooterBottomLink>
        </FooterBottomCenter>
        <FooterBottomLink>Termos</FooterBottomLink>
      </FooterBottom>
    </FooterContainer>
  );
};
