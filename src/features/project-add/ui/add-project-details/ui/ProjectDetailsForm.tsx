'use client';

import { FormProvider } from 'react-hook-form';

import { ROUTES } from '@/app/routes';
import {
  ProjectDetailsFields,
  projectDetailsSchema,
  type ProjectDetailsSchema,
} from '@/features/project-add';

import { useProjectActions } from '@/entities/project/api/useProjectActions';
import { uploadFileToSupabase } from '@/entities/project/lib/projects';
import { useLocalizedRouter, useAppForm } from '@/shared/lib/hooks';

import styles from './ProjectDetails.module.scss';

const { PROJECT } = ROUTES;

export const ProjectDetailsForm = () => {
  const localizedRouter = useLocalizedRouter();
  const { createProject, isProjectActionPending } = useProjectActions();

  const form = useAppForm<ProjectDetailsSchema>({
    schema: projectDetailsSchema,
    mode: 'onChange',
    defaultValues: {
      projectName: '',
      clientName: '',
      startDate: '',
      dueDate: '',
      price: '',
      platform: '',
      description: '',
      status: 'Pending',
      files: [],
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = form;

  const isDisabled = !isValid || isProjectActionPending;

  const onSubmit = handleSubmit(async (formData) => {
    const processedFiles = await Promise.all(
      formData.files.map(async (file) => {
        if (file instanceof File) {
          return await uploadFileToSupabase(file);
        }
        return file;
      }),
    );

    const payloadForServer: ProjectDetailsSchema = {
      ...formData,
      files: processedFiles,
    };

    createProject.mutate(payloadForServer, {
      onSuccess: () => localizedRouter.push(PROJECT),
    });
  });

  return (
    <FormProvider {...form}>
      <form className={styles.form} onSubmit={onSubmit}>
        <ProjectDetailsFields
          isProjectActionPending={isProjectActionPending}
          isDisabled={isDisabled}
        />
      </form>
    </FormProvider>
  );
};
