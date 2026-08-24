export const NAMESPACE = {
  BRAND: 'brand',
  AUTH: 'auth',
  SUBSCRIPTION: 'subscription',
  DASHBOARD: 'dashboard',
  PROJECTS: 'projectManagement',
  SIDEBAR: 'sidebar',
  MODAL: 'modal',
  HEADER: 'header',
  PROJECT: 'project',
  PROJECT_ADD: 'projectAdd',
  SIGN_UP_FORM: 'signUpForm',
  FORGOT_PASSWORD_FORM: 'forgotPasswordForm',
  RESET_PASSWORD_FORM: 'resetPasswordForm',
  SETTINGS: 'settings',
} as const;

export type Namespace = (typeof NAMESPACE)[keyof typeof NAMESPACE];

export const NAMESPACES: Namespace[] = Object.values(NAMESPACE);
