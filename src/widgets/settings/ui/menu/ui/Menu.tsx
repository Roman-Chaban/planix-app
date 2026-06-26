import type { MenuProps } from '../model/types';

import { type FC } from 'react';

import { List } from '@/shared/ui';

import { profileMenu } from '../lib/profile-menu';

import { MenuItem } from './MenuItem';
import styles from './ProfileMenu.module.scss';

export const Menu: FC<MenuProps> = ({ t, activeId, setActiveId }) => {
  return (
    <List
      className={styles.list}
      getItemKey={(key) => key.id}
      renderList={profileMenu}
      renderItem={(item) => {
        const isActive = item.id === activeId;

        return (
          <MenuItem
            {...item}
            isActive={isActive}
            setActiveId={setActiveId}
            t={t}
          />
        );
      }}
    />
  );
};
