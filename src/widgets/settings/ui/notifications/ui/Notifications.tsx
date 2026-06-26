'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/lib/i18n';
import { Box, List } from '@/shared/ui';

import { SettingsHeader } from '../../header';
import { getNotificationsList } from '../lib/notifications-list';

import { NotificationItem } from './NotificationItem';

import styles from './Notifications.module.scss';

export const Notifications = () => {
  const { t } = useTranslation(NS.PROFILE);
  const notifications = getNotificationsList(t);

  return (
    <Box className={styles.notifications}>
      <Box className={styles.container}>
        <SettingsHeader title={t('notifications.title')} />

        <List
          className={styles.notificationsList}
          renderList={notifications}
          getItemKey={({ id }) => id}
          renderItem={(item) => <NotificationItem {...item} />}
        />
      </Box>
    </Box>
  );
};
