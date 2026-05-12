'use client';

import { useTranslation } from 'react-i18next';

import { NoProjectsIcon } from '@/shared/ui/icons';
import { Box, ProjectButton, Typography } from '@/shared/ui/index';
import styles from '@/shared/ui/no-projects/styles/no-projects.module.scss';

export const NoProjects = () => {
  const { t } = useTranslation();

  return (
    <Box className={styles.box}>
      <Box className={styles.iconWrapper}>
        <NoProjectsIcon />
      </Box>

      <Box className={styles.content}>
        <Typography as="h4" className={styles.title}>
          {t('NoProjects.title')}
        </Typography>
        <Typography as="p" className={styles.subtitle}>
          {t('NoProjects.subtitle')}
        </Typography>

        <ProjectButton />
      </Box>
    </Box>
  );
};
