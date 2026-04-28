export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  PROJECTS: '/projects',
  CLIENTS: '/clients',
  LEADS: '/leads',
  INBOX: '/inbox',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
} as const;

export const LINK_TARGETS = {
  BLANK: '_blank',
  SELF: '_self',
  PARENT: '_parent',
  TOP: '_top',
  FRAMENAME: 'framename',
} as const;

export const LOCALES = {
  EN: 'en',
  UK: 'uk',
} as const;

export const LOCALE_VALUES = Object.values(LOCALES);
