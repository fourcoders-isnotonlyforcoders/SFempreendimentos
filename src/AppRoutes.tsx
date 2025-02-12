import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Termos } from "./pages/Termos";
import { Politicas } from "./pages/Politicas";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/politicas" element={<Politicas />} />
      </Routes>
    </BrowserRouter>
  );
};
