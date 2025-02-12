import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PageContainer } from "../components/PageContainer";
import { SecaoContato } from "../components/SecaoContato";
import { SecaoDepoimentos } from "../components/SecaoDepoimentos";
import { SecaoDiferenciais } from "../components/SecaoDiferenciais";
import { SecaoDuvidas } from "../components/SecaoDuvidas";
import { SecaoForm } from "../components/SecaoForm";
import { SecaoInicial } from "../components/SecaoInicial";
import { SecaoPortifolio } from "../components/SecaoPortifolio";
import { SecaoServicos } from "../components/SecaoServicos";
import { SecaoSobre } from "../components/SecaoSobre";
import { Separator } from "../components/Separator";

export const Home: React.FC = () => {
  return (
    <PageContainer>
      <Navbar />
      <SecaoInicial />
      <SecaoServicos />
      <SecaoDiferenciais />
      <SecaoPortifolio />
      <Separator />
      <SecaoSobre />
      <Separator />
      <SecaoForm />
      <SecaoDepoimentos />
      <SecaoDuvidas />
      <SecaoContato />
      <Footer />
    </PageContainer>
  );
};
