import { Box } from '@/shared/ui';

import styles from './Analytics.module.scss';
import { AnalyticsHeaders } from './AnalyticsHeaders';

export const Analytics = () => {
  return (
    <Box className={styles.analyticsWrapper}>
      <AnalyticsHeaders />
    </Box>
  );
};
