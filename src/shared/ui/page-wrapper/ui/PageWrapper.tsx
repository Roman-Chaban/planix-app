'use client';

import type { FC } from 'react';

import { Sidebar } from '@/widgets/sidebar';
import { useSidebar } from '@/features/sidebar';
import { buildClassName } from '@/shared/lib';
import { Box, Grid } from '@/shared/ui';
import type { PageWrapperProps } from '@/shared/ui/page-wrapper';

import styles from './PageWrapper.module.scss';

export const PageWrapper: FC<PageWrapperProps> = ({ children, header, sectionClassName }) => {
  const { isSidebarOpen, toggleSidebar, hydrated } = useSidebar();

  if (!hydrated) {
    return null;
  }

  return (
    <Grid
      className={buildClassName(styles.grid, {
        [styles.collapsed]: !isSidebarOpen,
      })}
    >
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {header}

      <Box
        as="main"
        className={buildClassName(styles.main, { [styles.mainCollapsed]: !isSidebarOpen })}
      >
        <Box as="section" className={sectionClassName}>
          {children}
        </Box>
      </Box>
    </Grid>
  );
};
