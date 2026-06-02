'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { SidebarNav, type SidebarProps } from '@/widgets/sidebar';

import { buildClassName } from '@/shared/lib';
import { Box, Button, Typography } from '@/shared/ui';

import { CollapsedIcon, ExpandedIcon, PlanixLogoIcon } from '@/shared/ui/icons';

import styles from './Sidebar.module.scss';

export const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const { t } = useTranslation('sidebar');

  const renderToggleIcon = isSidebarOpen ? <CollapsedIcon /> : <ExpandedIcon />;

  return (
    <Box
      as="aside"
      className={buildClassName(styles.sidebar, {
        [styles.sidebarClosed]: !isSidebarOpen,
      })}
    >
      <Box className={styles.sidebarLogo}>
        <PlanixLogoIcon width={44} height={44} />
        <Typography as="span" className={styles.sidebarTitle}>
          {t('title')}
        </Typography>

        <Button
          onClick={toggleSidebar}
          variant="transparent"
          className={buildClassName(styles.button, { [styles.iconCollapsed]: !isSidebarOpen })}
        >
          {renderToggleIcon}
        </Button>
      </Box>

      <Box as="nav" className={styles.content}>
        <SidebarNav isCollapsed={!isSidebarOpen} />
      </Box>
    </Box>
  );
};
