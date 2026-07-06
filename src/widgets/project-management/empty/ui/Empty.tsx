'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
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
          {t('projectEmpty.title')}
        </Typography>
        <Typography as="p" className={styles.subtitle}>
          {t('projectEmpty.subtitle')}
        </Typography>

        <ProjectButton
          preset="EMPTY_PROJECTS"
          label={t('projectEmpty.addProjectButton')}
          onClick={handleCreateProject}
        />
      </Box>
    </Box>
  );
};
