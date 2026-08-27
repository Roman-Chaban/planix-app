export const TEXTAREA_VARIANTS = {
  DEFAULT: 'default',
} as const;

export type TextareaVariants = (typeof TEXTAREA_VARIANTS)[keyof typeof TEXTAREA_VARIANTS];
