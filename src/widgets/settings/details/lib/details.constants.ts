export const MODE = {
  VIEW: 'view',
  EDIT: 'edit',
} as const;

export type Mode = (typeof MODE)[keyof typeof MODE];
