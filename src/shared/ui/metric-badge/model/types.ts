import type { WithChildren, WithClassName } from '@types';

export type MetricBadgeVariant = 'default' | 'success' | 'warning';

export type MetricBadgeProps = WithClassName &
  WithChildren & {
    variant?: MetricBadgeVariant;
  };
