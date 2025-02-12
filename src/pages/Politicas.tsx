import React from "react";
import { PoliticasContent } from "../components/Politicas";
import { Navbar } from "../components/Navbar";

export const Politicas: React.FC = () => {
  return (
    <>
      <Navbar />
      <PoliticasContent />;
    </>
  );
};
