import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    // Active debug message
    debug: false, //process.env.NODE_ENV === "development",
    // Strategy to define which language codes to lookup. Example: given set language is en-US: - 'currentOnly' ⇒ 'en-US'
    load: 'currentOnly',
    // List of supported languages & variations (xx-XX)
    //supportedLngs: languagesData,
    // Default language
    lng: window.localStorage.getItem("language") || "en-US",
    // Override dev i18n default language
    fallbackLng: window.localStorage.getItem("language") || "en-US",
    // Load custom lang (according to react local settings)
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
    },
    // Not needed for react as it escapes by default
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;