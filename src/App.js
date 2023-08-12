import { useEffect } from "react";
import "./App.css";
import { Landing } from "./Landing";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const userLanguage = navigator.language.split("-")[0]; // Get the language code
    if (userLanguage === "it") {
      i18n.changeLanguage("it");
    } else if (userLanguage === "es") {
      i18n.changeLanguage("es");
    }
  }, [i18n]);
  return (
    <>
      <Header />
      <Landing />
      <Footer />
    </>
  );
};

export default App;
