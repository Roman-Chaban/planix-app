import { Box } from '@/shared/ui';

import { AnalyticsHeaders } from './analytics-headers';
import styles from './analytics.module.scss';

export const Analytics = () => {
  return (
    <Box className={styles.analyticsWrapper}>
      <AnalyticsHeaders />
    </Box>
  );
};
