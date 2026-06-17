'use client';

import { ProjectDetailsForm } from '@/features/project-add';
import { ProjectDetailsHeader } from '@/features/project-add/ui/add-project-details';
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
