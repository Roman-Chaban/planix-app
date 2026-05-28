'use client';

import type { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import {
  useProjectDetailsForm,
  type ProjectDetailsFormProps,
  type ProjectDetailsFormData,
} from '@/features/project-add';
import {
  ProjectNameField,
  ClientNameField,
  StartDateField,
  DueDateField,
  PriceField,
  PlatformField,
  DescriptionField,
} from '@/features/project-add/ui/project-add-fields';

import { useProjectActions } from '@/entities/project/api/useProjectActions';
import { useLocalizedRouter } from '@/shared/lib/hooks';
import { Box, FileUpload, ProjectButton } from '@/shared/ui';

import { BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/ui/button/model/constants';

import styles from './ProjectDetails.module.scss';

const { SUBMIT } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;

const { PROJECT } = ROUTES;

export const ProjectDetailsForm: FC<ProjectDetailsFormProps> = ({ defaultValues }) => {
  const { t } = useTranslation('projectDetails');

  const localizedRouter = useLocalizedRouter();

  const form = useProjectDetailsForm(defaultValues);

  const { createProject } = useProjectActions();

  const handleCreateProject = (data: ProjectDetailsFormData) => {
    createProject.mutate(data, {
      onSuccess: () => localizedRouter.push(PROJECT),
    });
  };

  return (
    <FormProvider {...form}>
      <form className={styles.form} onSubmit={form.handleSubmit(handleCreateProject)}>
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

        <FileUpload
          label={t('label')}
          uploadLabel={t('uploadLabel')}
          uploadPhotosLabel={t('uploadPhotosLabel')}
        />
        <DescriptionField />

        <ProjectButton variant={DEFAULT} type={SUBMIT} disabled={createProject.isPending} />
      </form>
    </FormProvider>
  );
};
