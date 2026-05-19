'use client';

import { SidebarNav } from '@/widgets/sidebar/index';
import styles from '@/widgets/sidebar/ui/Sidebar.module.scss';

import { Box } from '@/shared/ui';

export const Sidebar = () => {
  return (
    <Box as="aside" className={styles.sidebar}>
      <Box as="nav" className={styles.content}>
        <SidebarNav />
      </Box>
    </Box>
  );
};
