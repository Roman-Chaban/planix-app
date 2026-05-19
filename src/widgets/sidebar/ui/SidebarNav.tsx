'use client';

import { usePathname } from 'next/navigation';

import { SidebarNavItem } from '@/widgets/sidebar/index';
import { sidebarNavItems } from '@/widgets/sidebar/model/constants';
import styles from '@/widgets/sidebar/ui/Sidebar.module.scss';
import { isActiveRoute } from '@/shared/lib/routing/isActiveRoute';
import { List } from '@/shared/ui';

export const SidebarNav = () => {
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
