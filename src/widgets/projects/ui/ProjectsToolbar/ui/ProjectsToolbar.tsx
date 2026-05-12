'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import styles from '@/widgets/projects/styles/projects.module.scss';
import type { ProjectsToolbarProps } from '@/widgets/projects/ui/ProjectsToolbar/model/types';
import { ICON_POSITION } from '@/shared/constants/common';
import { INPUT_TYPES } from '@/shared/constants/inputs';
import { Box, ProjectButton } from '@/shared/ui';
import { FormField, FormIcon, FormWrapper } from '@/shared/ui/form-field';
import { SearchIconPrimary } from '@/shared/ui/icons';
import { Input } from '@/shared/ui/input/ui/Input';

const { START } = ICON_POSITION;
const { SEARCH } = INPUT_TYPES;

export const ProjectToolbar: FC<ProjectsToolbarProps> = () => {
  const { t } = useTranslation();

  return (
    <Box className={styles.toolbar}>
      <FormField>
        <FormWrapper variant={SEARCH}>
          <FormIcon position={START}>
            <SearchIconPrimary />
          </FormIcon>
          <Input type={SEARCH} placeholder={t('ProjectsHeader.placeholder')} />
        </FormWrapper>
      </FormField>

      <ProjectButton />
    </Box>
  );
};
