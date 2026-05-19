'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { ProjectsToolbarProps } from '@/widgets/projects-toolbar/model/types';
import styles from '@/widgets/projects-toolbar/ui/ProjectsToolbar.module.scss';
import { ICON_POSITION } from '@/shared/config/common';
import { Box, ProjectButton } from '@/shared/ui';
import { FormField, FormIcon, FormWrapper } from '@/shared/ui/form-field';
import { SearchIconPrimary } from '@/shared/ui/icons';
import { Input } from '@/shared/ui/input/Input';
import { INPUT_TYPES } from '@/shared/ui/input/Input.constants';

const { START } = ICON_POSITION;
const { SEARCH } = INPUT_TYPES;

export const ProjectToolbar: FC<ProjectsToolbarProps> = () => {
  const { t } = useTranslation();

  return (
    <Box className={styles.toolbar}>
      <FormField className={styles.search}>
        <FormWrapper variant={SEARCH}>
          <FormIcon position={START}>
            <SearchIconPrimary />
          </FormIcon>
          <Input type={SEARCH} placeholder={t('projects.header.searchPlaceholder')} />
        </FormWrapper>
      </FormField>

      <ProjectButton />
    </Box>
  );
};
