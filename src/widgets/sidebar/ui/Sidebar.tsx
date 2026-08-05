'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/shared/config/routes';
import { Nav, type SidebarProps } from '@/widgets/sidebar';
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
          variant={TRANSPARENT}
          className={buildClassName(styles.button, {
            [styles.iconCollapsed]: !isSidebarOpen,
          })}
        >
          {renderToggleIcon}
        </Button>
      </Box>

      <Box as="nav" className={styles.content}>
        <Nav isCollapsed={!isSidebarOpen} t={t} />
      </Box>
    </Box>
  );
};
