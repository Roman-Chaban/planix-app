'use client';

import type { NavProps } from '../model/nav.types';

import { usePathname } from 'next/navigation';

import { List } from '@/shared/ui';

import { getNavItems } from '../lib/get-nav-items';
import { isActiveRoute } from '../lib/isActiveRoute';

import { NavItem } from './NavItem';

export const Nav = ({ isCollapsed, t }: NavProps) => {
  const pathname = usePathname();
  const navItems = getNavItems(t);

  return (
    <List
      getItemKey={({ id }) => id}
      renderList={navItems}
      renderItem={(item) => {
        const isActive = isActiveRoute(pathname, item.href);

        return <NavItem {...item} isActive={isActive} isCollapsed={isCollapsed} t={t} />;
      }}
    />
  );
};
