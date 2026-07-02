'use client';

import type { FC } from 'react';

import { ToolbarHeader, ToolbarActions } from '@/widgets/project-management';
import type { ToolbarProps } from '@/widgets/project-management/ui/toolbar';
import { useToolbar } from '@/widgets/project-management/ui/toolbar/model/useToolbar';

import { useSidebar } from '@/features/sidebar';
import { buildClassName } from '@/shared/lib';
import { Box } from '@/shared/ui';

import styles from './Toolbar.module.scss';

export const Toolbar: FC<ToolbarProps> = ({ activeId, setActiveId }) => {
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
      <ToolbarHeader
        activeId={activeId}
        setActiveId={setActiveId}
        isSidebarOpen={isSidebarOpen}
      />
      <ToolbarActions handleCreateProject={handleCreateProject} />
    </Box>
  );
};
