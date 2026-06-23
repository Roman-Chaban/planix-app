'use client';

import { useState, type FC } from 'react';

import { MenuItem, profileMenu, type MenuProps } from '@/widgets/profile/menu';
import { List } from '@/shared/ui';

import styles from './ProfileMenu.module.scss';

export const Menu: FC<MenuProps> = ({ t }) => {
  const [activeId, setActiveId] = useState<string>(profileMenu[0]?.id ?? '');

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
