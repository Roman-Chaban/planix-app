'use client';

import type { FC } from 'react';
import { usePathname } from 'next/navigation';

import { sidebarNavItems } from '@/widgets/sidebar/lib/sidebar-nav-items/sidebarNavItems';
import styles from '@/widgets/sidebar/styles/sidebar.module.scss';
import { SidebarNavItem } from '@/widgets/sidebar/ui/SidebarNavItem';
import { isActiveRoute } from '@/shared/lib/helpers/isActiveRoute/isActiveRoute';
import { List } from '@/shared/ui';

export const SidebarNav: FC = () => {
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
          />
        );
      }}
    />
  );
};
