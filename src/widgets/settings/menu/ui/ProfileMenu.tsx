'use client';

import type { ProfileMenuProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, Typography } from '@/shared/ui';

import { Menu } from './Menu';
import styles from './ProfileMenu.module.scss';

export const ProfileMenu = ({ activeId, setActiveId }: ProfileMenuProps) => {
  const { t } = useTranslation(NS.SETTINGS);

  return (
    <Box className={styles.menu}>
      <Box className={styles.container}>
        <Typography as="h3" className={styles.title}>
          {t('settings')}
        </Typography>

        <Menu t={t} activeId={activeId} setActiveId={setActiveId} />
      </Box>
    </Box>
  );
};
