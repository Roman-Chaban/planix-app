'use client';

import type { ToolbarProps } from './model/types';

import { buildClassName } from '@/shared/lib';
import { useSidebar } from '@/shared/providers/sidebar';
import { Box } from '@/shared/ui';

import { ToolbarActions } from './toolbar-actions';
import { ToolbarHeader } from './toolbar-header';
import { ToolbarSelect } from './toolbar-select';
import styles from './toolbar.module.scss';

export const Toolbar = ({
  projects,
  statusId,
  platformId,
  search,
  setStatusId,
  setPlatformId,
  setSearchQuery,
}: ToolbarProps) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <Box
      className={buildClassName(
        styles.toolbar,
        { [styles.toolbarCollapsed]: !isSidebarOpen },
        { [styles.toolbarExpanded]: isSidebarOpen },
      )}
    >
      <Box className={styles.toolbarMobile}>
        <ToolbarSelect statusId={statusId} setStatusId={setStatusId} />
      </Box>

      <Box className={styles.toolbarDesktop}>
        <ToolbarHeader statusId={statusId} setStatusId={setStatusId} />
      </Box>

      <ToolbarActions
        projects={projects}
        platformId={platformId}
        search={search}
        setPlatformId={setPlatformId}
        setSearchQuery={setSearchQuery}
      />
    </Box>
  );
};
