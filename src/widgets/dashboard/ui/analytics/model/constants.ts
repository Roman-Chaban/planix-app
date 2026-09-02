export const ANALYTICS_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const;

export type AnalyticsVariants = (typeof ANALYTICS_VARIANTS)[keyof typeof ANALYTICS_VARIANTS];
