import { Navbar } from "./components/Navbar";
import { PageContainer } from "./components/PageContainer";
import { SecaoInicial } from "./components/SecaoInicial";

export function App() {
  return (
    <PageContainer>
      <Navbar />
      <SecaoInicial />
    </PageContainer>
  );
}
