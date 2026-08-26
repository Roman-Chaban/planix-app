'use client';

import type { ToolbarActionsProps } from './model/types';

import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Box, FormField, ProjectButton } from '@/shared/ui';

import { SearchIconPrimary } from '@/shared/ui/icons';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/ui/input';

import { useNavigateToCreate } from './model/use-navigate-to-create';

import { PlatformSelect } from './platform-select';
import styles from './toolbar.module.scss';

const { SEARCH } = INPUT_TYPES;
const { DEFAULT } = INPUT_VARIANTS;

export const ToolbarActions = ({
  projects,
  search,
  platformId,
  setPlatformId,
  setSearchQuery,
}: ToolbarActionsProps) => {
  const { t } = useTranslation(NS.PROJECTS);
  const { navigateToCreate } = useNavigateToCreate();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box className={styles.toolbarActions}>
      <FormField
        id="project-search"
        variant={DEFAULT}
        startIcon={<SearchIconPrimary />}
        className={styles.search}
        inputProps={{
          type: SEARCH,
          value: search,
          onChange: handleSearch,
          placeholder: t('toolbar.searchPlaceholder'),
        }}
      />

      <PlatformSelect platformId={platformId} setPlatformId={setPlatformId} projects={projects} />

      <ProjectButton
        className={styles.addButton}
        preset="CREATE_PROJECT"
        onClick={navigateToCreate}
        label={t('toolbar.addProjectButton')}
      />
    </Box>
  );
};
