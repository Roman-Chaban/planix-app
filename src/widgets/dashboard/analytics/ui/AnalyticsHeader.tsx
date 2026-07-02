import type { AnalyticsHeaderProps } from '../model/types';

import { type FC } from 'react';

import { Box, Typography } from '@/shared/ui';

import styles from './Analytics.module.scss';

export const AnalyticsHeader: FC<AnalyticsHeaderProps> = ({
  id,
  variant,
  title,
  content,
  children,
}) => {
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
