'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/lib/i18n';
import { Box, Typography } from '@/shared/ui';

import { Menu } from './Menu';
import styles from './ProfileMenu.module.scss';

type ProfileMenuProps = {
  activeId: string;
  setActiveId: (id: string) => void;
};

export const ProfileMenu: FC<ProfileMenuProps> = ({
  activeId,
  setActiveId,
}) => {
  const { t } = useTranslation(NS.PROFILE);

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
