import type { MenuProps } from '../model/setting-menu.types';

import { List } from '@/shared/ui';

import { SETTINGS_MENU } from '../lib/settings-menu';

import { MenuTabType } from '../model/setting-menu.enums';

import { MenuItem } from './MenuItem';
import styles from './SettingMenu.module.scss';

export const Menu = ({ t, selectedId, setActiveId, isAuthenticated, onAction }: MenuProps) => {
  return (
    <List
      className={styles.list}
      getItemKey={(item) => item.id}
      renderList={SETTINGS_MENU}
      renderItem={(item) => {
        const disabled = item.requiresAuth && !isAuthenticated;

        const onClick = () => {
          if (disabled) {
            return;
          }

          if (item.type === MenuTabType.TAB) {
            setActiveId(item.id);
          } else {
            onAction(item.id);
          }
        };

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
