import { type FC } from 'react';

import type { DashboardAnalyticsHeaderProps } from '@/widgets/dashboard-analytics/model/types';

import { Box, Typography } from '@/shared/ui';

import styles from './DashboardAnalytics.module.scss';

export const DashboardAnalyticsHeader: FC<DashboardAnalyticsHeaderProps> = ({
  title,
  children,
}) => {
  return (
    <Box className={styles.analyticsHeader}>
      <Typography as="h4" className={styles.analyticsTitle}>
        {title}
      </Typography>

      {children}
    </Box>
  );
};
