import { TituloSecao } from "../TituloSecao";
import {
  SecaoServicosContainer,
  SecaoServicosItem,
  SecaoServicosItemContent,
  SecaoServicosItemDescription,
  SecaoServicosItemLink,
  SecaoServicosItemsContainer,
  SecaoServicosItemTitle
} from "./styles";

export const SecaoServicos: React.FC = () => {
  return (
    <SecaoServicosContainer id="servicos">
      <TituloSecao
        titulo="Conheça nossos serviços"
        preTitulo="Atuação"
        align="left"
        color="white"
      />
      <SecaoServicosItemsContainer>
        <SecaoServicosItem >
          <SecaoServicosItemTitle data-aos="fade-right" data-aos-duration="550" >Projetos Personalizados</SecaoServicosItemTitle>
          <SecaoServicosItemContent>
            <SecaoServicosItemDescription data-aos="fade-right" data-aos-duration="500">
            Transformamos suas ideias em realidade com soluções de construção personalizadas. Com experiência e compromisso, entregamos projetos de alta qualidade, dentro do prazo e orçamento, atendendo às suas necessidades específicas de forma eficiente e segura.
            </SecaoServicosItemDescription>
            <SecaoServicosItemLink data-aos="fade-left" data-aos-duration="500">Saiba mais</SecaoServicosItemLink>
          </SecaoServicosItemContent>
        </SecaoServicosItem>
        <SecaoServicosItem>
          <SecaoServicosItemTitle data-aos="fade-right" data-aos-duration="650">Reformas e Ampliações 
          </SecaoServicosItemTitle>
          <SecaoServicosItemContent>
            <SecaoServicosItemDescription data-aos="fade-right" data-aos-duration="600">
            Somos especializados em reformas e ampliações que valorizam o seu imóvel. Transformamos espaços com qualidade, precisão e respeito aos prazos e orçamentos. Seja para atualizar ambientes ou expandir suas instalações, nossa equipe garante resultados que atendem às suas necessidades, proporcionando conforto e funcionalidade.
            </SecaoServicosItemDescription>
            <SecaoServicosItemLink data-aos="fade-left" data-aos-duration="600">Saiba mais</SecaoServicosItemLink>
          </SecaoServicosItemContent>
        </SecaoServicosItem>
        <SecaoServicosItem>
          <SecaoServicosItemTitle data-aos="fade-right" data-aos-duration="750">Construção</SecaoServicosItemTitle>
          <SecaoServicosItemContent>
            <SecaoServicosItemDescription data-aos="fade-right" data-aos-duration="700">
            Realizamos construções com alto padrão de qualidade, segurança e eficiência. Desde o planejamento até a entrega final, nossa equipe acompanha cada etapa do processo, garantindo que seu projeto seja executado conforme o planejado, dentro do prazo e orçamento estabelecidos. Transformamos seus sonhos em realidade com soluções inovadoras e personalizadas.


            </SecaoServicosItemDescription>
            <SecaoServicosItemLink data-aos="fade-left" data-aos-duration="700">Saiba mais</SecaoServicosItemLink>
          </SecaoServicosItemContent>
        </SecaoServicosItem>
        <SecaoServicosItem>
          <SecaoServicosItemTitle data-aos="fade-right" data-aos-duration="750">Manutenções </SecaoServicosItemTitle>
          <SecaoServicosItemContent>
            <SecaoServicosItemDescription data-aos="fade-right" data-aos-duration="700">
            Oferecemos serviços completos de manutenção preventiva e corretiva para garantir o bom funcionamento e a durabilidade do seu imóvel. Com uma equipe especializada, realizamos reparos rápidos e eficientes, sempre com foco na qualidade e no atendimento às suas necessidades, proporcionando segurança e conforto para o seu dia a dia.
            </SecaoServicosItemDescription>
            <SecaoServicosItemLink data-aos="fade-left" data-aos-duration="700">Saiba mais</SecaoServicosItemLink>
          </SecaoServicosItemContent>
        </SecaoServicosItem>
        <SecaoServicosItem>
          <SecaoServicosItemTitle data-aos="fade-right" data-aos-duration="750">Demolição</SecaoServicosItemTitle>
          <SecaoServicosItemContent>
            <SecaoServicosItemDescription data-aos="fade-right" data-aos-duration="700">
            Realizamos serviços de demolição de forma segura, rápida e eficiente. Nossa equipe especializada segue rigorosos padrões de segurança e cuidado com o meio ambiente, garantindo a remoção de estruturas de maneira controlada e com o mínimo de impacto. Atendemos a diferentes tipos de obras, desde pequenas reformas até grandes projetos de reestruturação.
            </SecaoServicosItemDescription>
            <SecaoServicosItemLink data-aos="fade-left" data-aos-duration="700">Saiba mais</SecaoServicosItemLink>
          </SecaoServicosItemContent>
        </SecaoServicosItem>
      </SecaoServicosItemsContainer>
    </SecaoServicosContainer>
  );
};
