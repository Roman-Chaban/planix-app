import type { MenuProps } from '../model/types';

import { List } from '@/shared/ui';

import { PROFILE_MENU } from '../lib/profile-menu';

import { MenuItem } from './MenuItem';
import styles from './ProfileMenu.module.scss';

export const Menu = ({ t, activeId, setActiveId, isAuthenticated }: MenuProps) => {
  return (
    <List
      className={styles.list}
      getItemKey={(item) => item.id}
      renderList={PROFILE_MENU}
      renderItem={(item) => {
        if (item.type === 'action') {
          return null;
        }

        const isActive = item.id === activeId;

        const disabled = item.requiresAuth && !isAuthenticated;

        return (
          <MenuItem
            {...item}
            t={t}
            isActive={isActive}
            disabled={disabled}
            setActiveId={setActiveId}
          />
        );
      }}
    />
  );
};
