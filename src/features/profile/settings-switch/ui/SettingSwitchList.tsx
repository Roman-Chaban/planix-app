import type { IdentifiableSwitch, SettingSwitchListProps } from '@/shared/types/types';
import { List } from '@/shared/ui';

import styles from './SettingSwitch.module.scss';
import { SettingSwitchItem } from './SettingSwitchItem';

export const SettingSwitchList = <T extends IdentifiableSwitch>({
  itemClassName,
  list,
  t,
}: SettingSwitchListProps<T>) => {
  return (
    <List
      className={styles.switchList}
      itemClassName={itemClassName}
      renderList={list}
      getItemKey={({ id }) => id}
      renderItem={(item) => <SettingSwitchItem t={t} {...item} />}
    />
  );
};
