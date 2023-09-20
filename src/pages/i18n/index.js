import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { createRoot } from "react-dom/client";
import ptBrJson from "./translations/ptBr.json";
import enJson from "./translations/en.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    pt: ptBrJson,
    en: enJson,
  },
  lng: "en",
});

export default i18n;
