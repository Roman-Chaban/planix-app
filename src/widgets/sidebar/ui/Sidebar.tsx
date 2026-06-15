'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import { SidebarNav, type SidebarProps } from '@/widgets/sidebar';
import { buildClassName } from '@/shared/lib';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';

import { AppLink, Box, Button, Typography } from '@/shared/ui';

import { CollapsedIcon, ExpandedIcon, PlanixLogoIcon } from '@/shared/ui/icons';

import styles from './Sidebar.module.scss';

const { DASHBOARD } = ROUTES;

export const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const { t } = useTranslation(NS.SIDEBAR);

  const renderToggleIcon = isSidebarOpen ? <CollapsedIcon /> : <ExpandedIcon />;

  return (
    <Box
      as="aside"
      className={buildClassName(styles.sidebar, {
        [styles.sidebarClosed]: !isSidebarOpen,
      })}
    >
      <Box className={styles.sidebarLogo}>
        <AppLink href={DASHBOARD}>
          <PlanixLogoIcon width={44} height={44} />
        </AppLink>
        <Typography as="span" className={styles.sidebarTitle}>
          {t('title')}
        </Typography>

        <Button
          onClick={toggleSidebar}
          variant="transparent"
          className={buildClassName(styles.button, {
            [styles.iconCollapsed]: !isSidebarOpen,
          })}
        >
          {renderToggleIcon}
        </Button>
      </Box>

      <Box as="nav" className={styles.content}>
        <SidebarNav isCollapsed={!isSidebarOpen} t={t} />
      </Box>
    </Box>
  );
};
