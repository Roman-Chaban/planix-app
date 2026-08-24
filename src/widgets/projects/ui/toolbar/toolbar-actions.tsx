'use client';

import type { ToolbarActionsProps } from './model/types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Box, FormField, ProjectButton } from '@/shared/ui';

import { SearchIconPrimary } from '@/shared/ui/icons';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/ui/input';

import { PlatformSelect } from './platform-select';
import styles from './toolbar.module.scss';

const { SEARCH } = INPUT_TYPES;

export const ToolbarActions = ({
  handleCreateProject,
  platformId,
  setPlatformId,
  projects,
}: ToolbarActionsProps) => {
  const { t } = useTranslation(NS.PROJECTS);

  return (
    <Box className={styles.toolbarActions}>
      <FormField
        id="project-search"
        variant={INPUT_VARIANTS.DEFAULT}
        startIcon={<SearchIconPrimary />}
        className={styles.search}
        inputProps={{
          type: SEARCH,
          placeholder: t('toolbar.searchPlaceholder'),
        }}
      />

      <PlatformSelect platformId={platformId} setPlatformId={setPlatformId} projects={projects} />

      <ProjectButton
        className={styles.addButton}
        preset="ADD"
        onClick={handleCreateProject}
        label={t('toolbar.addProjectButton')}
      />
    </Box>
  );
};
