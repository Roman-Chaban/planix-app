import type { MenuItem as MenuItemConfig, MenuProps } from '../model/types';

import { List } from '@/shared/ui';

import { PROFILE_MENU } from '../lib/profile-menu';

import { MenuItem } from './MenuItem';
import styles from './ProfileMenu.module.scss';

export const Menu = ({
  t,
  activeId,
  setActiveId,
  isAuthenticated,
  setLogoutModalOpen,
}: MenuProps) => {
  const handleItemClick = (item: MenuItemConfig) => {
    if (item.type === 'tab') {
      setActiveId(item.id);
      return;
    }

    switch (item.id) {
      case 'logout':
        setLogoutModalOpen(true);
        break;
    }
  };

  return (
    <List
      className={styles.list}
      getItemKey={(item) => item.id}
      renderList={PROFILE_MENU}
      renderItem={(item) => {
        const isActive = item.type === 'tab' && item.id === activeId;
        const disabled = item.requiresAuth && !isAuthenticated;

        return (
          <MenuItem
            {...item}
            t={t}
            disabled={disabled}
            isActive={isActive}
            onClick={() => handleItemClick(item)}
          />
        );
      }}
    />
  );
};
