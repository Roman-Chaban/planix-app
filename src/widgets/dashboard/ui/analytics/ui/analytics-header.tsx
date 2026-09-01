import type { AnalyticsHeaderProps } from '../model/types';

import { Box, Typography } from '@/shared/ui';

import styles from './analytics.module.scss';

export const AnalyticsHeader = ({
  id,
  variant,
  title,
  content,
  children,
}: AnalyticsHeaderProps) => {
  return (
    <Box key={id} className={styles[variant]}>
      <Box className={styles.analyticsHeader}>
        <Typography as="h4" className={styles.analyticsTitle}>
          {title}
        </Typography>

        {content}
        {children}
      </Box>
    </Box>
  );
};
