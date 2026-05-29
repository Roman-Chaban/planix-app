'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useProjectToolbar } from '@/widgets/projects-toolbar/lib/useProjectToolbar';
import type { ProjectsToolbarProps } from '@/widgets/projects-toolbar/model/types';

import { Box, ProjectButton } from '@/shared/ui';
import {
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button/model/constants';
import { InputField } from '@/shared/ui/form-field';
import { SearchIconPrimary } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input/model/constants';

import styles from './ProjectsToolbar.module.scss';

const { SEARCH } = INPUT_TYPES;
const { BUTTON } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { LARGE } = BUTTON_SIZES;
const { ROUNDED } = BUTTON_SHAPES;

export const ProjectToolbar: FC<ProjectsToolbarProps> = () => {
  const { t } = useTranslation('addProjectHeader');
  const { handleCreateProject } = useProjectToolbar();

  return (
    <Box className={styles.toolbar}>
      <Box className={styles.search}>
        <InputField
          id="project-search"
          startIcon={<SearchIconPrimary />}
          inputProps={{
            type: SEARCH,
            placeholder: t('searchPlaceholder'),
          }}
        />
      </Box>

      <Box className={styles.buttonWrapper}>
        <ProjectButton
          type={BUTTON}
          shape={ROUNDED}
          variant={DEFAULT}
          size={LARGE}
          onClick={handleCreateProject}
          fullWidth
        />
      </Box>
    </Box>
  );
};
