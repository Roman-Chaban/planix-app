'use client';

import { useTranslation } from 'react-i18next';

import styles from '@/widgets/projects-empty/ui/ProjectsEmpty.module.scss';
import { NoProjectsIcon } from '@/shared/ui/icons';
import { Box, ProjectButton, Typography } from '@/shared/ui/index';

export const ProjectsEmpty = () => {
  const { t } = useTranslation();

  return (
    <Box className={styles.box}>
      <Box className={styles.iconWrapper}>
        <NoProjectsIcon />
      </Box>

      <Box className={styles.content}>
        <Typography as="h4" className={styles.title}>
          {t('projects.emptyState.title')}
        </Typography>
        <Typography as="p" className={styles.subtitle}>
          {t('projects.emptyState.subtitle')}
        </Typography>

        <ProjectButton />
      </Box>
    </Box>
  );
};
