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

export const Toolbar = ({
  projects,
  statusId,
  platformId,
  search,
  setStatusId,
  setPlatformId,
  setSearchQuery,
}: ToolbarProps) => {
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
      {isWideScreen ? (
        <ToolbarSelect statusId={statusId} setStatusId={setStatusId} />
      ) : (
        <ToolbarHeader
          statusId={statusId}
          isSidebarOpen={isSidebarOpen}
          setStatusId={setStatusId}
        />
      )}

      <ToolbarActions
        projects={projects}
        platformId={platformId}
        search={search}
        handleCreateProject={handleCreateProject}
        setPlatformId={setPlatformId}
        setSearchQuery={setSearchQuery}
      />
    </Box>
  );
};
