import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/shared/locales/en.json";
import uk from "@/shared/locales/uk.json";

const resources = {
  en: { translation: en },
  uk: { translation: uk },
};

const options = {
  resources,
  fallbackLng: "en",
  supportedLngs: ["en", "uk"],
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  initImmediate: false,
};

i18n.use(initReactI18next).init(options);

export default i18n;
