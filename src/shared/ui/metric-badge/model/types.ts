import type { MetricBadgeVariants } from './constants';
import type { WithChildren, WithClassName } from '@types';

export type MetricBadgeProps = {
  variant?: MetricBadgeVariants;
} & WithClassName &
  WithChildren;
