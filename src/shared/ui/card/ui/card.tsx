'use client';

import type { CardProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import { Box } from '../../box';
import { Typography } from '../../typography';

import styles from './card.module.scss';

export const Card = ({ id, label, name, value, trend, trendType }: CardProps) => {
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
          <Typography as="span" className={buildClassName(styles.trend, styles[trendType])}>
            {trend}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
