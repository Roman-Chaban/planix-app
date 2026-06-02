'use client';

import type { FC } from 'react';
import { usePathname } from 'next/navigation';

import { SidebarNavItem, type SidebarNavProps } from '@/widgets/sidebar';
import { sidebarNavItems } from '@/widgets/sidebar/data/sidebar-items';
import { isActiveRoute } from '@/widgets/sidebar/lib/isActiveRoute';

import { List } from '@/shared/ui';

import styles from './Sidebar.module.scss';

export const SidebarNav: FC<SidebarNavProps> = ({ isCollapsed }) => {
  const pathname = usePathname();

  return (
    <List
      className={styles.list}
      getItemKey={(item) => item.id}
      renderList={sidebarNavItems}
      renderItem={(item) => {
        const isActive = isActiveRoute(pathname, item.href);

        return (
          <SidebarNavItem
            id={item.id}
            label={item.label}
            icon={item.icon}
            href={item.href}
            isActive={isActive}
            isCollapsed={isCollapsed}
          />
        );
      }}
    />
  );
};
