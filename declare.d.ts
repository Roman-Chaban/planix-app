import "react-i18next";
import type { TranslationSchema } from "@/shared/config/i18n/types";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: TranslationSchema;
    };
  }
}
