'use client';

import { FormProvider } from 'react-hook-form';

import {
  projectAddFields,
  DescriptionField,
  FilesField,
  DueDateField,
  StartDateField,
  ProjectDetailsHeader,
  useProjectForm,
} from '@/features/project-add';

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

const { SUBMIT } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { ROUNDED } = BUTTON_SHAPES;
const { LARGE } = BUTTON_SIZES;
const { LG } = BUTTON_MAX_WIDTH;

export const ProjectDetailsForm = () => {
  const { form, onSubmit, isLoading } = useProjectForm();

  return (
    <Box className={styles.wrapper}>
      <ProjectDetailsHeader />

      <FormProvider {...form}>
        <form className={styles.form} onSubmit={onSubmit}>
          <FormFields
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
            isLoading={isLoading}
            disabled={isLoading}
            translationNamespace={NS.PROJECT_ADD}
            maxWidth={LG}
          />
        </form>
      </FormProvider>
    </Box>
  );
};
