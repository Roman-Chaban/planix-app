'use client';

import { useTranslation } from 'react-i18next';

import { Menu } from '@/widgets/profile/menu';
import { NAMESPACE as NS } from '@/shared/lib/i18n';
import { Box, Typography } from '@/shared/ui';

import styles from './ProfileMenu.module.scss';

export const ProfileMenu = () => {
  const { t } = useTranslation(NS.PROFILE);

  return (
    <Box className={styles.menu}>
      <Box className={styles.container}>
        <Typography as="h3" className={styles.title}>
          {t('settings')}
        </Typography>

        <Menu t={t} />
      </Box>
    </Box>
  );
};
