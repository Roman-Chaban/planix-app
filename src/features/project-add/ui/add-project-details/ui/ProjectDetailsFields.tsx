'use client';

import type { FC } from 'react';

import { useFormContext } from 'react-hook-form';

import {
  projectAddFields,
  type ProjectDetailsSchema,
} from '@/features/project-add';
import type { ProjectDetailsFieldsProps } from '@/features/project-add/model/types';

import {
  DescriptionField,
  StartDateField,
  DueDateField,
  FilesField,
} from '@/features/project-add/ui/project-add-fields';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { FormFields, Box, ProjectButton } from '@/shared/ui';

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

export const ProjectDetailsFields: FC<ProjectDetailsFieldsProps> = ({
  isProjectActionPending,
  isDisabled,
}) => {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext<ProjectDetailsSchema>();

  return (
    <>
      <FormFields
        fields={projectAddFields}
        register={register}
        errors={errors}
        translationNamespace={NS.PROJECT_ADD}
        isValid={isValid}
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
    </>
  );
};
