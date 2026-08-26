'use client';

import { useTranslation } from 'react-i18next';

import {
  projectAddFields,
  DescriptionField,
  FilesField,
  DueDateField,
  StartDateField,
  useProjectForm,
} from '@/features/project-create';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { AppForm, Box, FormFields, ProjectButton, Typography } from '@/shared/ui';

import styles from './create-form.module.scss';

export const CreateForm = () => {
  const { t } = useTranslation(NS.PROJECT_ADD);
  const { form, onSubmit, isLoading } = useProjectForm();

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.header}>
        <Typography as="span" className={styles.title}>
          {t('projectDetailsTitle')}
        </Typography>
      </Box>

      <AppForm form={form} onSubmit={onSubmit} className={styles.createForm}>
        <FormFields fields={projectAddFields} translationNamespace={NS.PROJECT_ADD} />

        <Box className={styles.row}>
          <StartDateField />
          <DueDateField />
        </Box>

        <Box className={styles.row}>
          <FilesField />
        </Box>

        <DescriptionField />

        <ProjectButton
          preset="CREATE_PROJECT"
          disabled={isLoading}
          label={t('addProjectButton')}
          translationNamespace={NS.PROJECT_ADD}
        />
      </AppForm>
    </Box>
  );
};
