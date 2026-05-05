import { DashboardAnalyticsHeaders } from '@/widgets/dashboard/ui/DashboardAnalytics/ui/DashboardAnalyticsHeaders';

import { Box } from '@/shared/ui';

import styles from '../styles/styles.module.scss';

export const DashboardAnalytics = () => {
  return (
    <Box className={styles.analytics}>
      <Box className={styles.analyticsWrapper}>
        <DashboardAnalyticsHeaders />
      </Box>
    </Box>
  );
};
