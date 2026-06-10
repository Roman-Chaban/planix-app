'use client';

import type { FC } from 'react';

import { ProjectHeader, ProjectActions } from '@/widgets/projects-toolbar';
import { useProjectToolbar } from '@/widgets/projects-toolbar/lib/useProjectToolbar';
import type { ProjectToolbarProps } from '@/widgets/projects-toolbar/model/types';

import { useSidebar } from '@/features/sidebar';
import { buildClassName } from '@/shared/lib';
import { Box } from '@/shared/ui';

import styles from './ProjectsToolbar.module.scss';

export const ProjectToolbar: FC<ProjectToolbarProps> = ({ activeId, setActiveId }) => {
  const { handleCreateProject } = useProjectToolbar();
  const { isSidebarOpen } = useSidebar();

  return (
    <Box
      className={buildClassName(
        styles.toolbar,
        { [styles.toolbarCollapsed]: !isSidebarOpen },
        { [styles.toolbarExpanded]: isSidebarOpen },
      )}
    >
      <ProjectHeader activeId={activeId} setActiveId={setActiveId} isSidebarOpen={isSidebarOpen} />
      <ProjectActions handleCreateProject={handleCreateProject} />
    </Box>
  );
};
