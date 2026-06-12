import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import type { ProjectsActionsProps } from '@/widgets/projects-toolbar';
import { Box, ProjectButton, InputField } from '@/shared/ui';

import {
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button';
import { SearchIconPrimary } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

import styles from './ProjectsToolbar.module.scss';

const { SEARCH } = INPUT_TYPES;
const { BUTTON } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { LARGE } = BUTTON_SIZES;
const { ROUNDED } = BUTTON_SHAPES;

export const ProjectActions: FC<ProjectsActionsProps> = ({
  handleCreateProject,
}) => {
  const { t } = useTranslation('addProjectHeader');

  return (
    <Box className={styles.toolbarActions}>
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

      {/* TODO: Select Platform will be added later */}
      <Box className={styles.platform}>Select Platform</Box>

      <ProjectButton
        type={BUTTON}
        shape={ROUNDED}
        variant={DEFAULT}
        size={LARGE}
        onClick={handleCreateProject}
        fullWidth
      />
    </Box>
  );
};
