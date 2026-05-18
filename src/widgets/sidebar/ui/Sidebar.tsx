'use client';

import styles from '@/widgets/sidebar/ui/Sidebar.module.scss';

import { SidebarNav } from '@/widgets/sidebar/ui/SidebarNav';
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
