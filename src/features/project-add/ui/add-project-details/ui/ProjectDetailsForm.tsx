'use client';

import type { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { useProjectDetailsForm, type ProjectDetailsFormProps } from '@/features/project-add';
import {
  ProjectNameField,
  ClientNameField,
  StartDateField,
  DueDateField,
  PriceField,
  PlatformField,
  DescriptionField,
} from '@/features/project-add/ui/project-add-fields';

import { Box, FileUpload, ProjectButton } from '@/shared/ui';

import styles from './ProjectDetails.module.scss';

export const ProjectDetailsForm: FC<ProjectDetailsFormProps> = ({ onSubmit, defaultValues }) => {
  const { t } = useTranslation('projectDetails');

  const form = useProjectDetailsForm(defaultValues);

  const handleSubmit = onSubmit ?? ((data) => console.log(data));

  return (
    <FormProvider {...form}>
      <form className={styles.form} onSubmit={form.handleSubmit(handleSubmit)}>
        <ProjectNameField />
        <ClientNameField />

        <Box className={styles.row}>
          <StartDateField />
          <DueDateField />
        </Box>

        <Box className={styles.row}>
          <PriceField />
          <PlatformField />
        </Box>

        <FileUpload label={t('label')} uploadLabel={t('uploadLabel')} />
        <DescriptionField />

        <ProjectButton />
      </form>
    </FormProvider>
  );
};
