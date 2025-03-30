import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const supportedLngs = {
  en: "EN",
  uk: "UK",
};

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    debug: true,
    lng:
      localStorage.getItem("selectedLanguage") ||
      navigator.language.substring(0, 2) ||
      "en",
    fallbackLng: "en",
    supportedLngs: Object.keys(supportedLngs),
    backend: {
      loadPath: "/chillz/locales/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
