// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./english.json";
import itTranslation from "./italian.json";
import esTranslation from "./spanish.json";

const resources = {
  en: { translation: enTranslation },
  it: { translation: itTranslation },
  es: { translation: esTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
