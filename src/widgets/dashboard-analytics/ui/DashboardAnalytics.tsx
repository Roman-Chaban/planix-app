import { DashboardAnalyticsHeaders } from '@/widgets/dashboard-analytics/index';
import styles from '@/widgets/dashboard-analytics/ui/DashboardAnalytics.module.scss';

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
