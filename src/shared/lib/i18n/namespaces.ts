export const NAMESPACE = {
  BRAND: 'brand',
  AUTH: 'auth',
  SIDEBAR: 'sidebar',
  MODAL: 'modal',
  DASHBOARD_CARDS: 'dashboardCards',
  HEADER: 'header',
  DASHBOARD_ANALYTICS: 'dashboardAnalytics',
  ADD_PROJECT_HEADER: 'addProjectHeader',
  PROJECTS_EMPTY: 'projectsEmpty',
  PROJECT_TABLE_HEADER: 'projectTableHeader',
  PROJECT_CREATE: 'projectCreate',
  PROJECT_ADD: 'projectAdd',
  PROJECT_EDIT: 'projectEdit',
  PROJECT_DETAILS: 'projectDetails',
  SIGN_UP_FORM: 'signUpForm',
  FORGOT_PASSWORD_FORM: 'forgotPasswordForm',
  RESET_PASSWORD_FORM: 'resetPasswordForm',
  SETTINGS: 'settings',
} as const;

export type Namespace = (typeof NAMESPACE)[keyof typeof NAMESPACE];

export const NAMESPACES: Namespace[] = Object.values(NAMESPACE);
