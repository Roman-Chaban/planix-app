'use client';

import type { PageWrapperProps } from '../model/types';

import { Sidebar } from '@/widgets/sidebar';
import { buildClassName } from '@/shared/lib';
import { useSidebar } from '@/shared/providers/sidebar';

import { Box } from '../../box';
import { Grid } from '../../grid';

import styles from './page-wrapper.module.scss';

export const PageWrapper = ({ children, header, sectionClassName }: PageWrapperProps) => {
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
        className={buildClassName(styles.main, {
          [styles.mainCollapsed]: !isSidebarOpen,
        })}
      >
        <Box as="section" className={sectionClassName}>
          {children}
        </Box>
      </Box>
    </Grid>
  );
};
