'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { useProjectToolbar } from '@/widgets/projects-toolbar/lib/useProjectToolbar';
import type { ProjectsToolbarProps } from '@/widgets/projects-toolbar/model/types';

import { ICON_POSITION } from '@/shared/constants';
import { Box, ProjectButton, Input, FormField } from '@/shared/ui';
import { FormIcon, FormWrapper } from '@/shared/ui/form-field';
import { SearchIconPrimary } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input/model/constants';

import styles from './ProjectsToolbar.module.scss';

const { START } = ICON_POSITION;
const { SEARCH } = INPUT_TYPES;

export const ProjectToolbar: FC<ProjectsToolbarProps> = () => {
  const { t } = useTranslation('addProjectHeader');

  const { handleCreateProject } = useProjectToolbar();

  return (
    <Box className={styles.toolbar}>
      <FormField className={styles.search}>
        <FormWrapper variant={SEARCH}>
          <FormIcon position={START}>
            <SearchIconPrimary />
          </FormIcon>
          <Input type={SEARCH} placeholder={t('searchPlaceholder')} />
        </FormWrapper>
      </FormField>

      <ProjectButton onClick={handleCreateProject} />
    </Box>
  );
};
