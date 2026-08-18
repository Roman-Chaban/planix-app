'use client';

import type { ToolbarProps } from './model/types';

import { buildClassName } from '@/shared/lib';
import { useMediaQuery } from '@/shared/lib/hooks';
import { useSidebar } from '@/shared/providers/sidebar';
import { Box } from '@/shared/ui';

import { BREAKPOINTS } from '@/shared/ui/theme';

import { useToolbar } from '../../model/use-toolbar';

import { ToolbarActions } from './toolbar-actions';
import { ToolbarHeader } from './toolbar-header';
import { ToolbarSelect } from './toolbar-select';
import styles from './toolbar.module.scss';

const { WIDE } = BREAKPOINTS;

export const Toolbar = ({ activeId, setActiveId, projects }: ToolbarProps) => {
  const { handleCreateProject } = useToolbar();
  const { isSidebarOpen } = useSidebar();

  const isWideScreen = useMediaQuery(WIDE);

  return (
    <Box
      className={buildClassName(
        styles.toolbar,
        { [styles.toolbarCollapsed]: !isSidebarOpen },
        { [styles.toolbarExpanded]: isSidebarOpen },
      )}
    >
      {!isWideScreen ? (
        <ToolbarHeader activeId={activeId} setActiveId={setActiveId} />
      ) : (
        <ToolbarSelect activeId={activeId} setActiveId={setActiveId} />
      )}
      <ToolbarActions
        projects={projects}
        handleCreateProject={handleCreateProject}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    </Box>
  );
};
