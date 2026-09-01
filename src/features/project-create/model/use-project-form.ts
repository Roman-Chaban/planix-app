'use client';

import type { SubmitHandler } from 'react-hook-form';

import { projectDetailsSchema, type ProjectDetailsSchema } from '@/features/project-create';

import { type ProjectFile, uploadProjectFile } from '@/entities/projects';

import { useProjectActions } from '@/entities/projects/model/use-project-actions';

import { ROUTES } from '@/shared/config';
import { useAppForm, useLocalizedRouter } from '@/shared/lib/hooks';

const { PROJECT } = ROUTES;

export const useProjectForm = () => {
  const localizedRouter = useLocalizedRouter();

  const { createProject, isProjectActionPending } = useProjectActions();

  const projectForm = useAppForm<ProjectDetailsSchema>({
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

  const processFiles = async (files: ProjectDetailsSchema['files']): Promise<ProjectFile[]> => {
    return Promise.all(
      files.map(async (file) => {
        if (file instanceof File) {
          return uploadProjectFile(file);
        }

        return file;
      }),
    );
  };

  const handleFormSubmit: SubmitHandler<ProjectDetailsSchema> = async (formData) => {
    try {
      const uploadedFiles = await processFiles(formData.files);

      createProject.mutate(
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

  return {
    form: projectForm,
    onSubmit: handleFormSubmit,
    isLoading: isProjectActionPending,
  };
};
