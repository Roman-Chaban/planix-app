'use client';

import type { ToolbarActionsProps } from '../model/actions.types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Box, FormField, ProjectButton } from '@/shared/ui';

import { SearchIconPrimary } from '@/shared/ui/icons';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/ui/input';

import styles from './ToolbarActions.module.scss';

const { SEARCH } = INPUT_TYPES;

export const ToolbarActions = ({ handleCreateProject }: ToolbarActionsProps) => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);

  return (
    <Box className={styles.toolbarActions}>
      <Box className={styles.search}>
        <FormField
          id="project-search"
          variant={INPUT_VARIANTS.DEFAULT}
          startIcon={<SearchIconPrimary />}
          inputProps={{
            type: SEARCH,
            placeholder: t('toolbar.searchPlaceholder'),
          }}
        />
      </Box>

      {/* TODO: [Select Platform will be added later] */}
      <Box className={styles.platform}>Select Platform</Box>

      <ProjectButton
        className={styles.button}
        preset="ADD"
        onClick={handleCreateProject}
        label={t('toolbar.addProjectButton')}
      />
    </Box>
  );
};
