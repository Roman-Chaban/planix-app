import { Box } from '@/shared/ui';

import { AnalyticsHeaders } from './analytics-headers';
import styles from './Analytics.module.scss';

export const Analytics = () => {
  return (
    <Box className={styles.analyticsWrapper}>
      <AnalyticsHeaders />
    </Box>
  );
};
