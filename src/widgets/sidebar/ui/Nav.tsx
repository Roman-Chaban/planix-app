'use client';

import { usePathname } from 'next/navigation';

import { NavItem, isActiveRoute, type NavProps } from '@/widgets/sidebar';

import { List } from '@/shared/ui';

import { getNavItems } from '../lib/get-nav-items';

import styles from './Sidebar.module.scss';

export const Nav = ({ isCollapsed, t }: NavProps) => {
  const pathname = usePathname();
  const navItems = getNavItems(t);

  return (
    <List
      className={styles.list}
      getItemKey={({ id }) => id}
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
