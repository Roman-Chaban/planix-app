'use client';

import type { SubmitHandler } from 'react-hook-form';

import { type ProjectFile, uploadProjectFile } from '@/entities/projects';

import { useProjectActions } from '@/entities/projects/model/use-project-actions';

import { ROUTES } from '@/shared/config';
import { useAppForm, useLocalizedRouter } from '@/shared/lib/hooks';

import { projectCreateSchema, type ProjectCreateSchema } from './schema';

const { PROJECT } = ROUTES;

export const useProjectCreate = () => {
  const localizedRouter = useLocalizedRouter();

  const { createProject, isProjectActionPending } = useProjectActions();

  const projectCreateForm = useAppForm<ProjectCreateSchema>({
    schema: projectCreateSchema,
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
    formState: { isValid, isSubmitting },
  } = projectCreateForm;

  const processFiles = async (files: ProjectCreateSchema['files']): Promise<ProjectFile[]> => {
    return Promise.all(
      files.map(async (file) => {
        if (file instanceof File) {
          return uploadProjectFile(file);
        }

        return file;
      }),
    );
  };

  const handleFormSubmit: SubmitHandler<ProjectCreateSchema> = async (formData) => {
    try {
      const uploadedFiles = await processFiles(formData.files);

      await createProject.mutateAsync(
        {
          formData,
          files: uploadedFiles,
        },
        {
          onSuccess: () => {
            localizedRouter.push(PROJECT);
          },
        },
      );
    } catch (error) {
      console.error('Failed to upload project files:', error);
    }
  };

  const isLoading = isSubmitting || isProjectActionPending;
  const isSubmitDisabled = !isValid || isLoading;

  return {
    form: projectCreateForm,
    isLoading,
    isSubmitDisabled,
    isSubmitting,
    onSubmit: handleFormSubmit,
  };
};
