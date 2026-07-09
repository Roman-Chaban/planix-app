import type { MenuProps } from '../model/menu.types';

import { List } from '@/shared/ui';

import { PROFILE_MENU } from '../lib/profile-menu';

import { MenuTabType } from '../model/menu.enums';

import { MenuItem } from './MenuItem';
import styles from './ProfileMenu.module.scss';

export const Menu = ({ t, selectedId, setActiveId, isAuthenticated, onAction }: MenuProps) => {
  return (
    <List
      className={styles.list}
      getItemKey={(item) => item.id}
      renderList={PROFILE_MENU}
      renderItem={(item) => {
        const disabled = item.requiresAuth && !isAuthenticated;

        const onClick =
          item.type === MenuTabType.TAB ? () => setActiveId(item.id) : () => onAction(item.id);

        return (
          <MenuItem
            {...item}
            t={t}
            disabled={disabled}
            isActive={item.id === selectedId}
            onClick={onClick}
          />
        );
      }}
    />
  );
};
