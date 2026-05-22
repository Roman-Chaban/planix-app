'use client';

import { useTranslation } from 'react-i18next';

import { Box, ProjectButton, Typography } from '@/shared/ui';
import { NoProjectsIcon } from '@/shared/ui/icons';

import styles from './ProjectsEmpty.module.scss';

export const ProjectsEmpty = () => {
  const { t } = useTranslation('projectsEmpty');

  return (
    <Box className={styles.box}>
      <Box className={styles.iconWrapper}>
        <NoProjectsIcon />
      </Box>

      <Box className={styles.content}>
        <Typography as="h4" className={styles.title}>
          {t('title')}
        </Typography>
        <Typography as="p" className={styles.subtitle}>
          {t('subtitle')}
        </Typography>

        <ProjectButton />
      </Box>
    </Box>
  );
};
