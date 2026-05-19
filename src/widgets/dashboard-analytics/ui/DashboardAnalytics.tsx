import styles from '@/widgets/dashboard-analytics/ui/DashboardAnalytics.module.scss';
import { DashboardAnalyticsHeaders } from '@/widgets/dashboard-analytics/ui/DashboardAnalyticsHeaders';

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
