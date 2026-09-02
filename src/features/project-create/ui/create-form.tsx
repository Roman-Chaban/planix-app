'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { BREAKPOINTS, useMediaQuery } from '@/shared/lib';
import { AppForm, Box, FormFields, ProjectButton, Typography } from '@/shared/ui';

import { BUTTON_SIZES } from '@/shared/ui/button';
import { FORM_FIELD_SIZES } from '@/shared/ui/form/form-field';

import { projectCreateFields } from '../lib/config';

import { useProjectCreate } from '../model/use-project-create';

import styles from './create-form.module.scss';

const { MOBILE_LARGE } = BREAKPOINTS;

export const CreateForm = () => {
  const { t } = useTranslation(NS.PROJECT_CREATE);
  const { form, onSubmit, isSubmitDisabled, isLoading } = useProjectCreate();

  const isMobileLarge = useMediaQuery(MOBILE_LARGE);

  const buttonSize = isMobileLarge ? BUTTON_SIZES.SMALL : BUTTON_SIZES.MEDIUM;
  const fieldSize = isMobileLarge ? FORM_FIELD_SIZES.MEDIUM : FORM_FIELD_SIZES.LARGE;

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.header}>
        <Typography as="span" className={styles.title}>
          {t('projectDetailsTitle')}
        </Typography>
      </Box>

      <AppForm form={form} onSubmit={onSubmit} className={styles.createForm}>
        <FormFields
          fields={projectCreateFields}
          translationNamespace={NS.PROJECT_CREATE}
          size={fieldSize}
        />

        <ProjectButton
          preset="CREATE_PROJECT"
          size={buttonSize}
          label={t('addProjectButton')}
          translationNamespace={NS.PROJECT_CREATE}
          disabled={isSubmitDisabled}
          isLoading={isLoading}
        />
      </AppForm>
    </Box>
  );
};
