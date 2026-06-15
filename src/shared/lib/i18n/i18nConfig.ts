import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { NAMESPACES } from '@/shared/lib/i18n/namespaces';

import { resources } from './resources';

const configOptions = {
  resources: resources,
  fallbackLng: 'en',
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
