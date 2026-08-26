'use client';

import type { SubmitHandler } from 'react-hook-form';

import { projectDetailsSchema, type ProjectDetailsSchema } from '@/features/project-create';
import { uploadProjectFile } from '@/entities/projects';
import { useProjectActions } from '@/entities/projects/model/use-project-actions';
import { ROUTES } from '@/shared/config/routes';
import { useLocalizedRouter, useAppForm } from '@/shared/lib/hooks';

const { PROJECT } = ROUTES;

export const useProjectForm = () => {
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

  const processFiles = async (files: ProjectDetailsSchema['files']) => {
    return Promise.all(
      files.map(async (file) => {
        if (file instanceof File) {
          return await uploadProjectFile(file);
        }
        return file;
      }),
    );
  };

  const handleFormSubmit: SubmitHandler<ProjectDetailsSchema> = async (formData) => {
    try {
      const processedFiles = await processFiles(formData.files);

      const payload: ProjectDetailsSchema = {
        ...formData,
        files: processedFiles,
      };

      createProject.mutate(payload, {
        onSuccess: () => localizedRouter.push(PROJECT),
      });
    } catch (error) {
      console.error('Failed to process project submission:', error);
    }
  };

  return {
    form,
    onSubmit: handleFormSubmit,
    isLoading: isProjectActionPending,
  };
};
