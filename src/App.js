import { useEffect, useRef } from "react";
import "./App.css";
import { Landing } from "./Landing";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();
  const servicesRef = useRef();
  const rocketWayRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const localLanguage = localStorage.getItem("lang");
    if (localLanguage) {
      i18n.changeLanguage(localLanguage);
    } else {
      const userLanguage = navigator.language.split("-")[0];
      i18n.changeLanguage(userLanguage);
      localStorage.setItem("lang", userLanguage);
    }
  }, [i18n]);

  return (
    <div
      className="overflow-x-hidden"
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <Header
        servicesRef={servicesRef}
        rocketWayRef={rocketWayRef}
        contactRef={contactRef}
      />
      <Landing
        servicesRef={servicesRef}
        rocketWayRef={rocketWayRef}
        contactRef={contactRef}
      />
      <Footer
        contactRef={contactRef}
        rocketWayRef={rocketWayRef}
        servicesRef={servicesRef}
      />
    </div>
  );
};

export default App;
