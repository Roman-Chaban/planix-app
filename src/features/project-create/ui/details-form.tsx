'use client';

import { useTranslation } from 'react-i18next';

import {
  projectAddFields,
  DescriptionField,
  FilesField,
  DueDateField,
  StartDateField,
  DetailsHeader,
  useProjectForm,
} from '@/features/project-create';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { AppForm, Box, FormFields, ProjectButton } from '@/shared/ui';

import styles from './details.module.scss';

export const DetailsForm = () => {
  const { t } = useTranslation(NS.PROJECT_ADD);
  const { form, onSubmit, isLoading } = useProjectForm();

  return (
    <Box className={styles.wrapper}>
      <DetailsHeader />

      <AppForm form={form} onSubmit={onSubmit}>
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
          preset="ADD"
          disabled={isLoading}
          label={t('addProjectButton')}
          translationNamespace={NS.PROJECT_ADD}
        />
      </AppForm>
    </Box>
  );
};
