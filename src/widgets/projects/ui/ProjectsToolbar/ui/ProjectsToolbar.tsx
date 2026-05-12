'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import styles from '@/widgets/projects/styles/projects.module.scss';
import type { ProjectsToolbarProps } from '@/widgets/projects/ui/ProjectsToolbar/model/types';
import { BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/constants/buttons';
import { ICON_POSITION } from '@/shared/constants/common';
import { INPUT_TYPES } from '@/shared/constants/inputs';
import { Box, Button } from '@/shared/ui';
import { FormField, FormIcon, FormWrapper } from '@/shared/ui/form-field';
import { SearchIconPrimary } from '@/shared/ui/icons';
import { Input } from '@/shared/ui/input/ui/Input';

const { START } = ICON_POSITION;
const { SEARCH } = INPUT_TYPES;
const { BUTTON } = BUTTON_TYPES;
const { PRIMARY } = BUTTON_VARIANTS;

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

      <Button type={BUTTON} variant={PRIMARY} size="md" className={styles.button}>
        {t('ProjectsHeader.button')}
      </Button>
    </Box>
  );
};
