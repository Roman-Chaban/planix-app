'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, ProjectButton, Typography } from '@/shared/ui';

import { EmptyStateIcon } from '@/shared/ui/icons';

import { useToolbar } from '../../model/use-toolbar';

import styles from './empty-state.module.scss';

export const EmptyState = () => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);

  const { handleCreateProject } = useToolbar();

  return (
    <Box className={styles.box}>
      <Box className={styles.iconWrapper}>
        <EmptyStateIcon />
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
