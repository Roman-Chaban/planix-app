'use client';

import { useTranslation } from 'react-i18next';

import { Nav, type SidebarProps } from '@/widgets/sidebar';
import { ROUTES } from '@/shared/config/routes';
import { NAMESPACE as NS } from '@/shared/i18n';
import { buildClassName } from '@/shared/lib';

import { AppLink, Box, Button, Typography } from '@/shared/ui';

import { BUTTON_VARIANTS } from '@/shared/ui/button';
import { CollapsedIcon, ExpandedIcon, PlanixLogoIcon } from '@/shared/ui/icons';

import styles from './Sidebar.module.scss';

const { DASHBOARD } = ROUTES;
const { TRANSPARENT } = BUTTON_VARIANTS;

export const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  const { t } = useTranslation(NS.SIDEBAR);

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
          {t('nav.title')}
        </Typography>

        <Button
          onClick={toggleSidebar}
          variant={TRANSPARENT}
          className={buildClassName(styles.toggleButton, {
            [styles.iconCollapsed]: !isSidebarOpen,
          })}
        >
          {isSidebarOpen ? <CollapsedIcon /> : <ExpandedIcon />}
        </Button>
      </Box>

      <Box as="nav" className={styles.content}>
        <Nav isCollapsed={!isSidebarOpen} t={t} />
      </Box>
    </Box>
  );
};
