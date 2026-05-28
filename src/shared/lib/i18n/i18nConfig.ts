import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from './resources';

const configOptions = {
  resources: resources,
  fallbackLng: 'en',
  supportedLngs: ['en', 'uk'],
  lng: 'en',
  ns: [
    'brand',
    'login',
    'sidebar',
    'modal',
    'dashboardCards',
    'header',
    'dashboardAnalytics',
    'addProjectHeader',
    'projectsEmpty',
    'projectTableHeader',
    'projectCreate',
    'projectDetails',
    'projectEdit',
  ],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
};

i18n.use(initReactI18next).init(configOptions);

export default i18n;
