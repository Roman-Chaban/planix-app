'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

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
  translationNamespace,
}) => {
  const { t } = useTranslation(translationNamespace);

  return (
    <Box key={id} className={styles.card}>
      <Typography as="h3" className={styles.label}>
        {t(label)}
      </Typography>

      <Box className={styles.cardMain}>
        <Typography as="span" className={styles.value}>
          {t(value)}
        </Typography>
        <Box className={styles.cardFooter}>
          <Typography as="span" className={styles.name}>
            {t(name)}
          </Typography>
          <Typography as="span" className={buildClassName(styles.trend, styles[trendType])}>
            {t(trend)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
