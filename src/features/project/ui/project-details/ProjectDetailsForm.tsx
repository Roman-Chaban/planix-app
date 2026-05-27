'use client';

import type { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import {
  ProjectNameField,
  ClientNameField,
  StartDateField,
  DueDateField,
  PriceField,
  PlatformField,
  DescriptionField,
} from '@/features/project';
import type { ProjectDetailsFormProps } from '@/features/project/model/types';

import { useProjectDetailsForm } from '@/features/project/model/useProjectDetailsForm';
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

        <FileUpload label={t('label')} uploadLabel={t('labelUpload')} />
        <DescriptionField />

        <ProjectButton />
      </form>
    </FormProvider>
  );
};
