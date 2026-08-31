export const TEXTAREA_VARIANTS = {
  DEFAULT: 'default',
} as const;

export type TextareaVariants = (typeof TEXTAREA_VARIANTS)[keyof typeof TEXTAREA_VARIANTS];

export const TEXTAREA_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export type TextareaSizes = (typeof TEXTAREA_SIZES)[keyof typeof TEXTAREA_SIZES];
