'use client';

import type { ToolbarProps } from '../model/types';

import type { FC } from 'react';

import { useSidebar } from '@/app/providers/sidebar';
import { ToolbarHeader, ToolbarActions } from '@/widgets/project-management';

import { buildClassName } from '@/shared/lib';
import { Box } from '@/shared/ui';

import { useToolbar } from '../model/useToolbar';

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
