'use client';

import type { FC } from 'react';

import styles from '@/widgets/sidebar/styles/sidebar.module.scss';
import { SidebarNav } from '@/widgets/sidebar/ui/sidebar-nav/SidebarNav';

import { Box } from '@/shared/ui';

export const Sidebar: FC = () => {
  return (
    <Box as="aside" className={styles.sidebar}>
      <Box as="nav" className={styles.content}>
        <SidebarNav />
      </Box>
    </Box>
  );
};
