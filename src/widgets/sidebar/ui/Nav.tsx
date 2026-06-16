'use client';

import type { FC } from 'react';
import { usePathname } from 'next/navigation';

import {
  navItems,
  NavItem,
  isActiveRoute,
  type NavProps,
} from '@/widgets/sidebar';

import { List } from '@/shared/ui';

import styles from './Sidebar.module.scss';

export const Nav: FC<NavProps> = ({ isCollapsed, t }) => {
  const pathname = usePathname();

  return (
    <List
      className={styles.list}
      getItemKey={(item) => item.id}
      renderList={navItems}
      renderItem={(item) => (
        <NavItem
          {...item}
          isActive={isActiveRoute(pathname, item.href)}
          isCollapsed={isCollapsed}
          t={t}
        />
      )}
    />
  );
};
