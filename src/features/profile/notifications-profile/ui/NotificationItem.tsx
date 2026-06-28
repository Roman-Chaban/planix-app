'use client';

import type { NotificationItemProps } from '../model/types';

import type { FC } from 'react';

import { useLocalStorage } from '@/shared/lib/hooks';
import { Box, Switch, Typography } from '@/shared/ui';

import styles from './Notifications.module.scss';

export const NotificationItem: FC<NotificationItemProps> = ({
  id,
  icon: Icon,
  title,
  subtitle,
}) => {
  const [isOn, setIsOn, hydrated] = useLocalStorage<boolean>(
    `switch-${id}`,
    false,
  );

  if (!hydrated) {
    return null;
  }

  return (
    <Box className={styles.notificationItem}>
      <Box className={styles.notificationContainer}>
        <Box className={styles.icon}>{Icon ? <Icon /> : null}</Box>
        <Box className={styles.titlesBox}>
          <Typography as="h3" className={styles.title}>
            {title}
          </Typography>
          <Typography as="p" className={styles.subtitle}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
      <Switch isOn={isOn} onToggle={setIsOn} />
    </Box>
  );
};
