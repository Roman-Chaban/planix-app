import { buildClassName } from '@/shared/lib';

import type { MetricBadgeProps } from '@/shared/ui/metric-badge';

import { Box } from '../../box';

import styles from './metric-badge.module.scss';

export const MetricBadge = ({ children, variant = 'default', className }: MetricBadgeProps) => {
  return (
    <Box as="span" className={buildClassName(styles.badge, styles[variant], className)}>
      {children}
    </Box>
  );
};
