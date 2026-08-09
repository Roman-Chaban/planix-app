import { AUTH_STEPS } from '@/features/auth/stepper';

export const AUTH_SESSION = {
  SIGNED_IN: 'SIGNED_IN',
  SIGNED_OUT: 'SIGNED_OUT',
} as const;

export const DATE_FORMAT = {
  DISPLAY: 'MMM DD, YYYY',
  INPUT: 'DD.MM.YYYY',
  ISO: 'YYYY-MM-DD',
} as const;

export const AUTH_STEP_VALUES: ReadonlySet<string> = new Set(Object.values(AUTH_STEPS));

export const STATUSES = {
  PENDING: 'Pending',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
  CANCELED: 'Canceled',
} as const;
