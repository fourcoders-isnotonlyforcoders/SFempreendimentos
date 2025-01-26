import { Navbar } from "./components/Navbar";
import { PageContainer } from "./components/PageContainer";
import { SecaoDiferenciais } from "./components/SecaoDiferenciais";
import { SecaoInicial } from "./components/SecaoInicial";
import { SecaoPortifolio } from "./components/SecaoPortifolio";
import { SecaoServicos } from "./components/SecaoServicos";
import { SecaoSobre } from "./components/SecaoSobre";

export function App() {
  return (
    <PageContainer>
      <Navbar />
      <SecaoInicial />
      <SecaoServicos />
      <SecaoDiferenciais />
      <SecaoPortifolio />
      <SecaoSobre/>
    </PageContainer>
  );
}
