import type { FC } from 'react';

import type { ProjectDetailsFieldsProps } from '@/features/project-add/model/types';
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
import { Box, ProjectButton } from '@/shared/ui';
import {
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button';

const { SUBMIT } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { ROUNDED } = BUTTON_SHAPES;
const { LARGE } = BUTTON_SIZES;

import styles from './ProjectDetails.module.scss';

export const ProjectDetailsFields: FC<ProjectDetailsFieldsProps> = ({
  isProjectActionPending,
  isDisabled,
}) => {
  return (
    <>
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
        <ProjectButton
          type={SUBMIT}
          shape={ROUNDED}
          variant={DEFAULT}
          size={LARGE}
          fullWidth
          isLoading={isProjectActionPending}
          disabled={isDisabled}
        />
      </Box>
    </>
  );
};
