import { Navbar } from "./components/Navbar";
import { PageContainer } from "./components/PageContainer";
import { SecaoDiferenciais } from "./components/SecaoDiferenciais";
import { SecaoInicial } from "./components/SecaoInicial";
import { SecaoServicos } from "./components/SecaoServicos";

export function App() {
  return (
    <PageContainer>
      <Navbar />
      <SecaoInicial />
      <SecaoServicos />
      <SecaoDiferenciais />
    </PageContainer>
  );
}
