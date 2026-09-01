import type { IdentifiableSwitch, SettingSwitchListProps } from '@types';

import { List } from '@/shared/ui';

import { SettingsSwitchItem } from './settings-switch-item';
import styles from './settings-switch.module.scss';

export const SettingsSwitchList = <T extends IdentifiableSwitch>({
  itemClassName,
  list,
}: SettingSwitchListProps<T>) => {
  return (
    <List
      className={styles.switchList}
      itemClassName={itemClassName}
      renderList={list}
      getItemKey={({ id }) => id}
      renderItem={(item) => <SettingsSwitchItem {...item} />}
    />
  );
};
