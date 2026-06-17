'use client';

import {
  ProjectDetailsForm,
  ProjectDetailsHeader,
} from '@/features/project-add';
import { Box } from '@/shared/ui';

import styles from './ProjectDetails.module.scss';

export const ProjectDetails = () => {
  return (
    <Box className={styles.wrapper}>
      <ProjectDetailsHeader />
      <ProjectDetailsForm />
    </Box>
  );
};
