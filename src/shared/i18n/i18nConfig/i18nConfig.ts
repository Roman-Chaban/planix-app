import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LOCALE, resources } from '@/shared/i18n';
import { NAMESPACES } from '@/shared/i18n/namespaces/namespaces';

const configOptions = {
  resources: resources,
  fallbackLng: DEFAULT_LOCALE,
  supportedLngs: ['en', 'uk'],
  lng: 'en',
  ns: NAMESPACES,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
};

i18n.use(initReactI18next).init(configOptions);

export default i18n;
