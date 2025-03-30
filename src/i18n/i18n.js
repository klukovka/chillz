import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: navigator.language.substring(0, 2) || "en",
    fallbackLng: "en",
    backend: {
      loadPath: "/chillz/locales/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
