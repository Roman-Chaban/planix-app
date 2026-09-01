'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, Typography } from '@/shared/ui';

import styles from './subscription-header.module.scss';

export const SubscriptionHeader = () => {
  const { t } = useTranslation(NS.SUBSCRIPTION);

  return (
    <Box as="header" className={styles.header}>
      <Typography as="h1" className={styles.title}>
        {t('header.title')}
      </Typography>

      <Typography as="p" className={styles.subtitle}>
        {t('header.subtitle')}
      </Typography>
    </Box>
  );
};
