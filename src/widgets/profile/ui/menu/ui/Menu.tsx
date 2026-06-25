import { type FC } from 'react';

import { MenuItem, profileMenu } from '@/widgets/profile/ui/menu';
import type { MenuProps } from '@/widgets/profile/ui/menu';
import { List } from '@/shared/ui';

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
