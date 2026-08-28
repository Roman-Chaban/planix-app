export const SELECT_CONTROL_VARIANTS = {
  DEFAULT: 'default',
  LANGUAGE: 'language',
  TOOLBAR: 'toolbar',
  PLATFORM: 'platform',
} as const;

export type SelectControlVariants =
  (typeof SELECT_CONTROL_VARIANTS)[keyof typeof SELECT_CONTROL_VARIANTS];
