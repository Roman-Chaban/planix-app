import { type FC } from 'react';

import type { DashboardAnalyticsHeaderProps } from '@/widgets/dashboard/ui/dashboard-analytics/model/types';
import styles from '@/widgets/dashboard/ui/dashboard-analytics/styles/dashboard-analytics.module.scss';
import { Box, Typography } from '@/shared/ui';

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
