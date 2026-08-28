export const BREAKPOINTS = {
  MOBILE: 320,
  MOBILE_LARGE: 640,
  TABLET: 768,
  LAPTOP: 1024,
  DESKTOP: 1280,
  WIDE: 1536,
} as const;

export type Breakpoint = (typeof BREAKPOINTS)[keyof typeof BREAKPOINTS];

export const AUTH_SESSION = {
  SIGNED_IN: 'SIGNED_IN',
  SIGNED_OUT: 'SIGNED_OUT',
} as const;

export type AuthSession = (typeof AUTH_SESSION)[keyof typeof AUTH_SESSION];

export const DATE_FORMAT = {
  DISPLAY: 'MMM DD, YYYY',
  INPUT: 'DD.MM.YYYY',
  ISO: 'YYYY-MM-DD',
} as const;

export type DateFormat = (typeof DATE_FORMAT)[keyof typeof DATE_FORMAT];

export const AUTH_STEPS = {
  LOGIN: 'login',
  REGISTER: 'register',
  FORGOT: 'forgot',
  RESET: 'reset',
  VERIFY: 'verify',
} as const;

export type AuthStep = (typeof AUTH_STEPS)[keyof typeof AUTH_STEPS];

export const AUTH_STEP_VALUES: ReadonlySet<string> = new Set(Object.values(AUTH_STEPS));

export const STATUSES = {
  PENDING: 'Pending',
  IN_PROGRESS: 'InProgress',
  COMPLETED: 'Completed',
  CANCELED: 'Canceled',
} as const;

export type Status = (typeof STATUSES)[keyof typeof STATUSES];
