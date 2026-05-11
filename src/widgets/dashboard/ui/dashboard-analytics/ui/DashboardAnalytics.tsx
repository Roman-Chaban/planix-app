import styles from '@/widgets/dashboard/ui/dashboard-analytics/styles/dashboard-analytics.module.scss';
import { DashboardAnalyticsHeaders } from '@/widgets/dashboard/ui/dashboard-analytics/ui/DashboardAnalyticsHeaders';

import { Box } from '@/shared/ui';


export const DashboardAnalytics = () => {
  return (
    <Box className={styles.analytics}>
      <Box className={styles.analyticsWrapper}>
        <DashboardAnalyticsHeaders />
      </Box>
    </Box>
  );
};
