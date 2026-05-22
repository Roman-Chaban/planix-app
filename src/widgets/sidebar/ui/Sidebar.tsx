'use client';

import { SidebarNav } from '@/widgets/sidebar';

import { Box } from '@/shared/ui';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <Box as="aside" className={styles.sidebar}>
      <Box as="nav" className={styles.content}>
        <SidebarNav />
      </Box>
    </Box>
  );
};
