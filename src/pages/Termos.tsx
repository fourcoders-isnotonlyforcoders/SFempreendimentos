import { ButtonReturn } from "../components/Button/Return";
import { Navbar } from "../components/Navbar";
import { TermosContent } from "../components/Termos";

export const Termos: React.FC = () => {
  return (
    <>
      <Navbar readonly />
      <TermosContent />;
      <ButtonReturn to="/" />
    </>
  );
};
