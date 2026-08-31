'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, SettingsHeader } from '@/shared/ui';

import { SettingSwitchList } from '../../settings-switch/ui/SettingSwitchList';
import { notificationsList } from '../lib/notifications-list';

import styles from './notifications.module.scss';

export const Notifications = () => {
  const { t } = useTranslation(NS.SETTINGS);

  return (
    <Box className={styles.notifications}>
      <Box className={styles.container}>
        <SettingsHeader title={t('notifications.title')} />

        <SettingSwitchList className={styles.notificationsList} list={notificationsList} />
      </Box>
    </Box>
  );
};
