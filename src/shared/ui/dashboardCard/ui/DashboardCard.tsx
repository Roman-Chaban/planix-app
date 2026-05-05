'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import type { DashboardCardProps } from '@/shared/ui/dashboardCard/model/types';
import { Box, Typography } from '@/shared/ui/index';

import styles from './styles.module.scss';

export const DashboardCard: FC<DashboardCardProps> = ({
  id,
  label,
  name,
  value,
  trend,
  trendType,
}) => {
  const { t } = useTranslation();

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
