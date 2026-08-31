import type { IdentifiableSwitch, SettingSwitchListProps } from '@types';

import { List } from '@/shared/ui';

import { SettingSwitchItem } from './settings-switch-item';
import styles from './settings-switch.module.scss';

export const SettingSwitchList = <T extends IdentifiableSwitch>({
  itemClassName,
  list,
}: SettingSwitchListProps<T>) => {
  return (
    <List
      className={styles.switchList}
      itemClassName={itemClassName}
      renderList={list}
      getItemKey={({ id }) => id}
      renderItem={(item) => <SettingSwitchItem {...item} />}
    />
  );
};
