'use client';

import type { NavItemProps } from '../model/nav.types';

import { buildClassName } from '@/shared/lib';
import { AppLink, Box, Typography } from '@/shared/ui';

import styles from './Nav.module.scss';

export const NavItem = ({
  id: key,
  icon: Icon,
  label,
  href,
  isActive,
  isCollapsed,
  t,
}: NavItemProps) => {
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
