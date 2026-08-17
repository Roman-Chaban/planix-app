'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, ProjectButton, Typography } from '@/shared/ui';

import { NoProjectsIcon } from '@/shared/ui/icons';

import { useToolbar } from '../../toolbar';

import styles from './Empty.module.scss';

export const Empty = () => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);

  const { handleCreateProject } = useToolbar();

  return (
    <Box className={styles.box}>
      <Box className={styles.iconWrapper}>
        <NoProjectsIcon />
      </Box>

      <Box className={styles.content}>
        <Typography as="h4" className={styles.title}>
          {t('emptyProjects.title')}
        </Typography>
        <Typography as="p" className={styles.subtitle}>
          {t('emptyProjects.subtitle')}
        </Typography>

        <ProjectButton
          preset="EMPTY_PROJECTS"
          label={t('emptyProjects.addProjectButton')}
          onClick={handleCreateProject}
        />
      </Box>
    </Box>
  );
};
