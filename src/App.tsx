import { Navbar } from "./components/Navbar";
import { PageContainer } from "./components/PageContainer";
import { SecaoInicial } from "./components/SecaoInicial";
import { SecaoServicos } from "./components/SecaoServicos";

export function App() {
  return (
    <PageContainer>
      <Navbar />
      <SecaoInicial />
      <SecaoServicos />
    </PageContainer>
  );
}
