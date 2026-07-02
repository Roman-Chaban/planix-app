'use client';

import type { ToolbarActionsProps } from '../model/types';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Box, FormField, ProjectButton } from '@/shared/ui';

import {
  BUTTON_MAX_WIDTH,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button';
import { SearchIconPrimary } from '@/shared/ui/icons';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/ui/input';

import styles from './Toolbar.module.scss';

const { SEARCH } = INPUT_TYPES;
const { BUTTON } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { LARGE } = BUTTON_SIZES;
const { ROUNDED } = BUTTON_SHAPES;
const { XL } = BUTTON_MAX_WIDTH;

export const ToolbarActions: FC<ToolbarActionsProps> = ({
  handleCreateProject,
}) => {
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
        type={BUTTON}
        shape={ROUNDED}
        variant={DEFAULT}
        size={LARGE}
        maxWidth={XL}
        onClick={handleCreateProject}
        fullWidth
        label={t('toolbar.addProjectButton')}
      />
    </Box>
  );
};
