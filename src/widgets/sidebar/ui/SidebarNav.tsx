'use client';

import type { FC } from 'react';
import { usePathname } from 'next/navigation';

import { SidebarNavItem, type SidebarNavProps } from '@/widgets/sidebar';
import { sidebarNavItems } from '@/widgets/sidebar/data/sidebar-items';
import { isActiveRoute } from '@/widgets/sidebar/lib/isActiveRoute';

import { List } from '@/shared/ui';

import styles from './Sidebar.module.scss';

export const SidebarNav: FC<SidebarNavProps> = ({ isCollapsed, t }) => {
  const pathname = usePathname();

  return (
    <List
      className={styles.list}
      getItemKey={(item) => item.id}
      renderList={sidebarNavItems}
      renderItem={(item) => (
        <SidebarNavItem
          {...item}
          isActive={isActiveRoute(pathname, item.href)}
          isCollapsed={isCollapsed}
          t={t}
        />
      )}
    />
  );
};
