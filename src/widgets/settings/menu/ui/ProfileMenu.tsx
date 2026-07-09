'use client';

import type { ProfileMenuProps } from '../model/menu.types';

import { useTranslation } from 'react-i18next';

import { ModalId, useModal } from '@/app/providers/modal';
import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, Typography } from '@/shared/ui';

import { ProfileTabIdEnum } from '../model/menu.enums';

import { Menu } from './Menu';
import styles from './ProfileMenu.module.scss';

export const ProfileMenu = ({ activeId, setActiveId, isAuthenticated }: ProfileMenuProps) => {
  const { openModal, isModalOpen } = useModal();
  const { t } = useTranslation(NS.SETTINGS);

  const selectedId = isModalOpen(ModalId.LOGOUT)
    ? ModalId.LOGOUT
    : (activeId ?? ProfileTabIdEnum.PROFILE);

  return (
    <Box className={styles.menu}>
      <Box className={styles.container}>
        <Typography as="h3" className={styles.title}>
          {t('settings')}
        </Typography>

        <Menu
          isAuthenticated={isAuthenticated}
          t={t}
          selectedId={selectedId}
          setActiveId={setActiveId}
          onAction={openModal}
        />
      </Box>
    </Box>
  );
};
