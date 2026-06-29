import { type FC } from 'react';

import type { DashboardAnalyticsHeaderProps } from '@/widgets/dashboard';

import { Box, Typography } from '@/shared/ui';

import styles from './DashboardAnalytics.module.scss';

export const DashboardAnalyticsHeader: FC<DashboardAnalyticsHeaderProps> = ({
  id,
  variant,
  title,
  content,
  children,
}) => {
  return (
    <Box key={id} className={styles[variant]}>
      <Box className={styles.analyticsHeader}>
        <Typography as="h4" className={styles.analyticsTitle}>
          {title}
        </Typography>

        {content}
        {children}
      </Box>
    </Box>
  );
};
