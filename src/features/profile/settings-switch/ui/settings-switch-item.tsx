'use client';

import type { SettingSwitchItemProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { useLocalStorage } from '@/shared/lib/hooks';
import { Box, Switch, Typography } from '@/shared/ui';

import styles from './settings-switch.module.scss';

export const SettingsSwitchItem = ({ id, icon: Icon, title, subtitle }: SettingSwitchItemProps) => {
  const { t } = useTranslation(NS.SETTINGS);
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
