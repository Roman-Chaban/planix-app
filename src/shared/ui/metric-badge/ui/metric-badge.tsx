import type { MetricBadgeProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import { Box } from '../../box';

import { METRIC_BADGE_VARIANTS } from '../model/constants';

import styles from './metric-badge.module.scss';

export const MetricBadge = ({
  children,
  variant = METRIC_BADGE_VARIANTS.DEFAULT,
  className,
}: MetricBadgeProps) => {
  return (
    <Box as="span" className={buildClassName(styles.badge, styles[variant], className)}>
      {children}
    </Box>
  );
};
