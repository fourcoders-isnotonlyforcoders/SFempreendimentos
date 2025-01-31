import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageContainer } from "./components/PageContainer";
import { SecaoDiferenciais } from "./components/SecaoDiferenciais";
import { SecaoInicial } from "./components/SecaoInicial";
import { SecaoPortifolio } from "./components/SecaoPortifolio";
import { SecaoServicos } from "./components/SecaoServicos";
import { SecaoSobre } from "./components/SecaoSobre";
import { SecaoForm } from "./components/SecaoForm";
import { SecaoDepoimentos } from "./components/SecaoDepoimentos";

export function App() {
  // Inicializando o AOS quando o componente for montado
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      once: false
    });
  }, []);
  return (
    <PageContainer>
      <Navbar />
      <SecaoInicial />
      <SecaoServicos />
      <SecaoDiferenciais />
      <SecaoPortifolio />
      <SecaoSobre />
      <SecaoForm />
      <SecaoDepoimentos />
    </PageContainer>
  );
}
