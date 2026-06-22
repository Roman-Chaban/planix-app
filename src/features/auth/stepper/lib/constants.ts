export const AUTH_STEPS = {
  LOGIN: 'login',
  REGISTER: 'register',
  FORGOT: 'forgot',
  RESET: 'reset',
  // TODO: [Temporary mock this field]
  // VERIFY: 'verify',
} as const;

export type AuthStep = (typeof AUTH_STEPS)[keyof typeof AUTH_STEPS];
