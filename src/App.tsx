import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppRoutes } from "./AppRoutes";

export function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      once: false
    });
  }, []);

  return <AppRoutes />;
}
