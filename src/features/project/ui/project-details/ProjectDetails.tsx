'use client';

import { useTranslation } from 'react-i18next';

import { ProjectDetailsForm } from '@/features/project';
import { Box, Typography } from '@/shared/ui';

import styles from './ProjectDetails.module.scss';

export const ProjectDetails = () => {
  const { t } = useTranslation('projectDetails');

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.header}>
        <Typography as="span" className={styles.title}>
          {t('projectDetailsTitle')}
        </Typography>
      </Box>
      <ProjectDetailsForm />
    </Box>
  );
};
