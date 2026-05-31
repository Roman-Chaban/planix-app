'use client';

import type { FC } from 'react';
import { FormProvider } from 'react-hook-form';

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
  FilesField,
} from '@/features/project-add/ui/project-add-fields';

import { useProjectActions } from '@/entities/project/api/useProjectActions';
import { useLocalizedRouter } from '@/shared/lib/hooks';
import { Box, ProjectButton } from '@/shared/ui';

import {
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button/model/constants';

import styles from './ProjectDetails.module.scss';

const { SUBMIT } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { ROUNDED } = BUTTON_SHAPES;
const { LARGE } = BUTTON_SIZES;

const { PROJECT } = ROUTES;

export const ProjectDetailsForm: FC<ProjectDetailsFormProps> = ({ defaultValues }) => {
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

        <FilesField />
        <DescriptionField />

        <Box className={styles.buttonWrapper}>
          <ProjectButton type={SUBMIT} shape={ROUNDED} variant={DEFAULT} size={LARGE} fullWidth />
        </Box>
      </form>
    </FormProvider>
  );
};
