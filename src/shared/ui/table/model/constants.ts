export const TABLE_VARIANTS = {
  DEFAULT: 'default',
  BORDERED: 'bordered',
  CARD: 'card',
  MINIMAL: 'minimal',
} as const;

export type TableVariants = (typeof TABLE_VARIANTS)[keyof typeof TABLE_VARIANTS];

export const TABLE_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type TableSizes = (typeof TABLE_SIZES)[keyof typeof TABLE_SIZES];
