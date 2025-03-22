import React from "react";
import { PoliticasContent } from "../components/Politicas";
import { Navbar } from "../components/Navbar";
import { ButtonReturn } from "../components/Button/Return";

export const Politicas: React.FC = () => {
  return (
    <>
      <Navbar readonly />
      <PoliticasContent />;
      <ButtonReturn to="/" />
    </>
  );
};
