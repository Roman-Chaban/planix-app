'use client';

import type { SubmitHandler } from 'react-hook-form';

import { projectDetailsSchema, type ProjectDetailsSchema } from '@/features/project-add';
import { useProjectActions } from '@/entities/project/model/useProjectActions';
import { uploadProjectFile } from '@/entities/project/api/getProjects';
import { ROUTES } from '@/shared/config/routes';
import { useLocalizedRouter, useAppForm } from '@/shared/lib/hooks';

const { PROJECT } = ROUTES;

const DEFAULT_VALUES: ProjectDetailsSchema = {
  projectName: '',
  clientName: '',
  startDate: '',
  dueDate: '',
  price: '',
  platform: '',
  description: '',
  status: 'Pending',
  files: [],
};

export const useProjectForm = () => {
  const localizedRouter = useLocalizedRouter();
  const { createProject, isProjectActionPending } = useProjectActions();

  const form = useAppForm<ProjectDetailsSchema>({
    schema: projectDetailsSchema,
    mode: 'onChange',
    defaultValues: DEFAULT_VALUES,
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
