'use client';

import type { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import { ROUTES } from '@/app/routes';
import {
  useProjectDetailsForm,
  type ProjectDetailsFormProps,
  type ProjectDetailsFormData,
  ProjectDetailsFields,
} from '@/features/project-add';

import { useProjectActions } from '@/entities/project/api/useProjectActions';
import { useLocalizedRouter } from '@/shared/lib/hooks';

import styles from './ProjectDetails.module.scss';

const { PROJECT } = ROUTES;

export const ProjectDetailsForm: FC<ProjectDetailsFormProps> = ({ defaultValues }) => {
  const localizedRouter = useLocalizedRouter();

  const { createProject, isProjectActionPending } = useProjectActions();

  const form = useProjectDetailsForm(defaultValues);

  const { isValid } = form.formState;

  const isDisabled = !isValid || isProjectActionPending;

  const handleCreateProject = (data: ProjectDetailsFormData) => {
    createProject.mutate(data, {
      onSuccess: () => localizedRouter.push(PROJECT),
    });
  };

  return (
    <FormProvider {...form}>
      <form className={styles.form} onSubmit={form.handleSubmit(handleCreateProject)}>
        <ProjectDetailsFields
          isProjectActionPending={isProjectActionPending}
          isDisabled={isDisabled}
        />
      </form>
    </FormProvider>
  );
};
