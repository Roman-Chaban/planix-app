'use client';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { Box, Typography } from '@/shared/ui';
import type { CardProps } from '@/shared/ui/card';

import styles from './Card.module.scss';

export const Card: FC<CardProps> = ({
  id,
  label,
  name,
  value,
  trend,
  trendType,
}) => {
  return (
    <Box key={id} className={styles.card}>
      <Typography as="h3" className={styles.label}>
        {label}
      </Typography>

      <Box className={styles.cardMain}>
        <Typography as="span" className={styles.value}>
          {value}
        </Typography>
        <Box className={styles.cardFooter}>
          <Typography as="span" className={styles.name}>
            {name}
          </Typography>
          <Typography
            as="span"
            className={buildClassName(styles.trend, styles[trendType])}
          >
            {trend}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
