'use client';

import type { FC } from 'react';

import { SidebarHeader } from '@/widgets/sidebar/ui/SidebarHeader';
import { SidebarNav } from '@/widgets/sidebar/ui/SidebarNav';

import { Box } from '@/shared/ui';

import styles from './styles.module.scss';

export const Sidebar: FC = () => {
  return (
    <Box className={styles.sidebar}>
      <Box className={styles.content}>
        <SidebarHeader />
        <SidebarNav />
      </Box>
    </Box>
  );
};
