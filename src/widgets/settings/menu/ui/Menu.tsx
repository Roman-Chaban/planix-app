import type { MenuProps } from '../model/types';

import { List } from '@/shared/ui';

import { getProfileMenuItems } from '../lib/get-menu-items';

import { MenuItem } from './MenuItem';
import styles from './ProfileMenu.module.scss';

export const Menu = ({ t, activeId, setActiveId }: MenuProps) => {
  const menuItems = getProfileMenuItems(t);

  return (
    <List
      className={styles.list}
      getItemKey={(key) => key.id}
      renderList={menuItems}
      renderItem={(item) => {
        const isActive = item.id === activeId;

        return <MenuItem {...item} isActive={isActive} setActiveId={setActiveId} t={t} />;
      }}
    />
  );
};
