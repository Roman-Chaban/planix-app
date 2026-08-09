'use client';

import type { ToolbarProps } from '../model/types';

import { ToolbarHeader, ToolbarActions } from '@/widgets/project-management';

import { buildClassName } from '@/shared/lib';
import { useSidebar } from '@/shared/providers/sidebar';
import { Box } from '@/shared/ui';

import { useToolbar } from '../model/useToolbar';

import styles from './Toolbar.module.scss';

export const Toolbar = ({ activeId, setActiveId }: ToolbarProps) => {
  const { handleCreateProject } = useToolbar();
  const { isSidebarOpen } = useSidebar();

  return (
    <Box
      className={buildClassName(
        styles.toolbar,
        { [styles.toolbarCollapsed]: !isSidebarOpen },
        { [styles.toolbarExpanded]: isSidebarOpen },
      )}
    >
      <ToolbarHeader activeId={activeId} setActiveId={setActiveId} isSidebarOpen={isSidebarOpen} />
      <ToolbarActions handleCreateProject={handleCreateProject} />
    </Box>
  );
};
