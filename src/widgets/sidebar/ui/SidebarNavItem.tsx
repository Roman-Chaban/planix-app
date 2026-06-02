'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { SidebarNavItem as SidebarNavItemProps } from '@/widgets/sidebar/model/types';

import { buildClassName } from '@/shared/lib';
import { AppLink, Box, Typography } from '@/shared/ui';

import styles from './Sidebar.module.scss';

export const SidebarNavItem: FC<SidebarNavItemProps> = ({
  id: key,
  icon: Icon,
  label,
  href,
  isActive,
  isCollapsed,
}) => {
  const { t } = useTranslation('sidebar');

  return (
    <AppLink href={href} key={key}>
      <Box
        className={buildClassName(
          styles.item,
          isActive && styles.active,
          isCollapsed && styles.collapsed,
        )}
      >
        <Icon />

        <Typography className={styles.label}>{t(label)}</Typography>
      </Box>
    </AppLink>
  );
};
