export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  PROJECTS: '/project-management',
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

export const ICON_POSITION = {
  START: 'start',
  END: 'end',
} as const;

export const INSTANCE_ID = 'language-switcher' as const;
