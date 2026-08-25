'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, ProjectButton, Typography } from '@/shared/ui';

import { EmptyStateIcon } from '@/shared/ui/icons';

import { useNavigateToCreate } from '../../model/use-navigate-to-create';

import styles from './empty-state.module.scss';

export const EmptyState = () => {
  const { t } = useTranslation(NS.PROJECTS);

  const { navigateToCreate } = useNavigateToCreate();

  return (
    <Box className={styles.stateContainer}>
      <Box className={styles.stateIcon}>
        <EmptyStateIcon />
      </Box>

      <Box className={styles.stateContent}>
        <Typography as="h4" className={styles.stateTitle}>
          {t('emptyProjects.title')}
        </Typography>
        <Typography as="p" className={styles.stateSubtitle}>
          {t('emptyProjects.subtitle')}
        </Typography>

        <ProjectButton
          preset="EMPTY_PROJECTS"
          label={t('emptyProjects.addProjectButton')}
          onClick={navigateToCreate}
        />
      </Box>
    </Box>
  );
};
