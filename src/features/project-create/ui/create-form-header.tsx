'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Box, Typography } from '@/shared/ui';

import styles from './create-form.module.scss';

export const CreateFormHeader = () => {
  const { t } = useTranslation(NS.PROJECT_ADD);

  return (
    <Box className={styles.header}>
      <Typography as="span" className={styles.title}>
        {t('projectDetailsTitle')}
      </Typography>
    </Box>
  );
};
