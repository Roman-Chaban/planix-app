'use client';

import type { SettingSwitchItemProps } from '../model/setting-switch.types';

import { useLocalStorage } from '@/shared/lib/hooks';
import { Box, Switch, Typography } from '@/shared/ui';

import styles from './SettingSwitch.module.scss';

export const SettingSwitchItem = ({
  id,
  icon: Icon,
  title,
  subtitle,
  t,
}: SettingSwitchItemProps) => {
  const [isOn, setIsOn, hydrated] = useLocalStorage<boolean>(`switch-${id}`, false);

  if (!hydrated) {
    return null;
  }

  return (
    <Box className={styles.switch}>
      <Box className={styles.switchContainer}>
        <Box className={styles.switchIcon}>{Icon ? <Icon /> : null}</Box>
        <Box className={styles.switchInfo}>
          <Typography as="h3" className={styles.switchTitle}>
            {t(title)}
          </Typography>
          <Typography as="p" className={styles.switchSubtitle}>
            {t(subtitle)}
          </Typography>
        </Box>
      </Box>
      <Switch isOn={isOn} onToggle={setIsOn} />
    </Box>
  );
};
