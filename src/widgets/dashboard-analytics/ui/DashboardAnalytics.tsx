import { DashboardAnalyticsHeaders } from '@/widgets/dashboard-analytics';

import { Box } from '@/shared/ui';

import styles from './DashboardAnalytics.module.scss';

export const DashboardAnalytics = () => {
  return (
    <Box className={styles.analyticsWrapper}>
      <DashboardAnalyticsHeaders />
    </Box>
  );
};
