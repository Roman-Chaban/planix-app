import type { FC } from 'react';

import { ProfileHeader } from '@/widgets/profile/ui/ui';
import { Box, List } from '@/shared/ui';

import { notificationsList } from '../lib/notifications-list';

import { NotificationItem } from './NotificationItem';

import styles from './Notifications.module.scss';

export const Notifications: FC = () => {
  return (
    <Box className={styles.notifications}>
      <Box className={styles.container}>
        <ProfileHeader title="Notifications" />

        <List
          className={styles.notificationsList}
          renderList={notificationsList}
          getItemKey={({ id }) => id}
          renderItem={(item) => <NotificationItem {...item} />}
        />
      </Box>
    </Box>
  );
};
