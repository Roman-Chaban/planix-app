'use client';

import type { FC } from 'react';

import { SidebarNav } from '@/widgets/sidebar/ui/SidebarNav';

import { Box } from '@/shared/ui';

import styles from '../styles/styles.module.scss';

export const Sidebar: FC = () => {
  return (
    <Box as="aside" className={styles.sidebar}>
      <Box as="nav" className={styles.content}>
        <SidebarNav />
      </Box>
    </Box>
  );
};
