'use client';

import type { FC } from 'react';

import { ProjectHeader, ProjectActions } from '@/widgets/projects-toolbar';
import { useProjectToolbar } from '@/widgets/projects-toolbar/lib/useProjectToolbar';
import type { ProjectToolbarProps } from '@/widgets/projects-toolbar/model/types';

import { Box } from '@/shared/ui';

import styles from './ProjectsToolbar.module.scss';

export const ProjectToolbar: FC<ProjectToolbarProps> = ({ activeId, setActiveId }) => {
  const { handleCreateProject } = useProjectToolbar();

  return (
    <Box className={styles.toolbar}>
      <ProjectHeader activeId={activeId} setActiveId={setActiveId} />
      <ProjectActions handleCreateProject={handleCreateProject} />
    </Box>
  );
};
