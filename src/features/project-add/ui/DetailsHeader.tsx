'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { Box, Typography } from '@/shared/ui';

import styles from './Details.module.scss';

export const DetailsHeader = () => {
  const { t } = useTranslation(NS.PROJECT_ADD);

  return (
    <Box className={styles.header}>
      <Typography as="span" className={styles.title}>
        {t('projectDetailsTitle')}
      </Typography>
    </Box>
  );
};
