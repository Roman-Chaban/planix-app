import { DashboardAnalyticsHeaders } from '@/widgets/dashboard/ui/DashboardAnalytics/DashboardAnalyticsHeaders';
import { Box } from '@/shared/ui';

import styles from '../styles.module.scss';

export const DashboardAnalytics = () => {
  return (
    <Box className={styles.analytics}>
      <Box className={styles.analyticsWrapper}>
        <DashboardAnalyticsHeaders />
      </Box>
    </Box>
  );
};
