'use client';

import { FormProvider } from 'react-hook-form';

import { ROUTES } from '@/app/routes';
import {
  projectDetailsSchema,
  type ProjectDetailsSchema,
  projectAddFields,
  DescriptionField,
  FilesField,
  DueDateField,
  StartDateField,
} from '@/features/project-add';

import { useProjectActions } from '@/entities/project/api/useProjectActions';
import { uploadFileToSupabase } from '@/entities/project/lib/projects';
import { useLocalizedRouter, useAppForm } from '@/shared/lib/hooks';

import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { Box, FormFields, ProjectButton } from '@/shared/ui';
import {
  BUTTON_MAX_WIDTH,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button';

import styles from './ProjectDetails.module.scss';

const { PROJECT } = ROUTES;
const { SUBMIT } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { ROUNDED } = BUTTON_SHAPES;
const { LARGE } = BUTTON_SIZES;
const { LG } = BUTTON_MAX_WIDTH;

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
    try {
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
    } catch (error) {
      console.error('Failed to upload files:', error);
    }
  });

  return (
    <FormProvider {...form}>
      <form className={styles.form} onSubmit={onSubmit}>
        <FormFields
          isValid={isValid}
          fields={projectAddFields}
          translationNamespace={NS.PROJECT_ADD}
        />

        <Box className={styles.row}>
          <StartDateField />
          <DueDateField />
        </Box>

        <Box className={styles.row}>
          <FilesField />
        </Box>

        <DescriptionField />

        <ProjectButton
          type={SUBMIT}
          shape={ROUNDED}
          variant={DEFAULT}
          size={LARGE}
          isLoading={isProjectActionPending}
          disabled={isDisabled}
          translationNamespace={NS.PROJECT_ADD}
          maxWidth={LG}
        />
      </form>
    </FormProvider>
  );
};
