'use client';

import type { NavProps } from '../model/nav.types';

import { usePathname } from 'next/navigation';

import { List } from '@/shared/ui';

import { getNavItems } from '../lib/get-nav-items';
import { isActiveRoute } from '../lib/is-active-route';

import { NavItem } from './NavItem';

export const Nav = ({ isCollapsed, t }: NavProps) => {
  const pathname = usePathname();
  const navItems = getNavItems(t);

  return (
    <List
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
