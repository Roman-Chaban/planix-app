import 'react-i18next';
import type { TranslationSchema } from '@/shared/config/i18n/model/types';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: TranslationSchema;
    };
  }
}
