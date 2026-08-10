'use client';

import type { ToolbarProps } from '../model/toolbar.types';

import { buildClassName } from '@/shared/lib';
import { useMediaQuery } from '@/shared/lib/hooks';
import { useSidebar } from '@/shared/providers/sidebar';
import { Box } from '@/shared/ui';

import { BREAKPOINTS } from '@/shared/ui/theme';

import { useToolbar } from '../model/useToolbar';

import { ToolbarActions } from './actions/ui/ToolbarActions';
import { ToolbarHeader } from './header/ui/ToolbarHeader';
import { ToolbarSelect } from './select/ui/ToolbarSelect';
import styles from './Toolbar.module.scss';

const { WIDE } = BREAKPOINTS;

export const Toolbar = ({ activeId, setActiveId }: ToolbarProps) => {
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
      <ToolbarActions handleCreateProject={handleCreateProject} />
    </Box>
  );
};
