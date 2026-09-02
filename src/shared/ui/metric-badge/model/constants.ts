export const METRIC_BADGE_VARIANTS = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  WARNING: 'warning',
} as const;

export type MetricBadgeVariants =
  (typeof METRIC_BADGE_VARIANTS)[keyof typeof METRIC_BADGE_VARIANTS];
