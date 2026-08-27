'use client';

import { useTranslation } from 'react-i18next';

import { projectAddFields, useProjectForm } from '@/features/project-create';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { useMediaQuery } from '@/shared/lib/hooks';
import { AppForm, Box, FormFields, ProjectButton, Typography } from '@/shared/ui';

import { BUTTON_SIZES } from '@/shared/ui/button';
import { INPUT_SIZES } from '@/shared/ui/input';
import { BREAKPOINTS } from '@/shared/ui/theme';

import { CreateFormFields } from './create-form-fields';
import styles from './create-form.module.scss';

const { MOBILE_LARGE } = BREAKPOINTS;

export const CreateForm = () => {
  const { t } = useTranslation(NS.PROJECT_ADD);
  const { form, onSubmit, isLoading } = useProjectForm();

  const isMobileLarge = useMediaQuery(MOBILE_LARGE);

  const buttonSize = isMobileLarge ? BUTTON_SIZES.SMALL : BUTTON_SIZES.MEDIUM;
  const fieldSize = isMobileLarge ? INPUT_SIZES.MEDIUM : INPUT_SIZES.LARGE;

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.header}>
        <Typography as="span" className={styles.title}>
          {t('projectDetailsTitle')}
        </Typography>
      </Box>

      <AppForm form={form} onSubmit={onSubmit} className={styles.createForm}>
        <FormFields
          fields={projectAddFields}
          translationNamespace={NS.PROJECT_ADD}
          size={fieldSize}
        />

        <CreateFormFields fieldSize={fieldSize} />

        <ProjectButton
          size={buttonSize}
          preset="CREATE_PROJECT"
          disabled={isLoading}
          label={t('addProjectButton')}
          translationNamespace={NS.PROJECT_ADD}
        />
      </AppForm>
    </Box>
  );
};
