import type { FC } from 'react';

import { usePathname } from 'next/navigation';

import { sidebarNavItems } from '@/widgets/sidebar/model/sidebarNavItems';

import { SidebarNavItem } from '@/widgets/sidebar/ui/SidebarNavItem';
import { isActiveRoute } from '@/shared/lib/helpers/isActiveRoute/isActiveRoute';
import { normalizePathname } from '@/shared/lib/helpers/normalizePathname/normalizePathname ';
import { List } from '@/shared/ui';

import styles from './styles.module.scss';

export const SidebarNav: FC = () => {
  const pathname = usePathname();
  const currentPath = normalizePathname(pathname);

  return (
    <List
      getItemKey={(item) => item.id}
      renderList={sidebarNavItems}
      renderItem={(item) => {
        const isActive = isActiveRoute(currentPath, item.href);

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
      className={styles.list}
    />
  );
};
