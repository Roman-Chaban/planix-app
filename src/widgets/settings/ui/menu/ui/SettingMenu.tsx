'use client';

import type { SettingMenuProps } from '../model/setting-menu.types';

import { useTranslation } from 'react-i18next';

import { ModalId, selectIsModalOpen } from '@/entities/modal';
import { openModal } from '@/entities/modal/model/slice';
import { NAMESPACE as NS } from '@/shared/i18n';
import { useAppDispatch, useAppSelector } from '@/shared/providers/store/model/hooks';
import { Box, Typography } from '@/shared/ui';

import { SettingTabIdEnum } from '../model/setting-menu.enums';

import { Menu } from './Menu';
import styles from './SettingMenu.module.scss';

export const ProfileMenu = ({ activeId, setActiveId, isAuthenticated }: SettingMenuProps) => {
  const { t } = useTranslation(NS.SETTINGS);
  const dispatch = useAppDispatch();

  const isLogoutModalOpen = useAppSelector(selectIsModalOpen(ModalId.LOGOUT));

  const selectedId = isLogoutModalOpen ? ModalId.LOGOUT : (activeId ?? SettingTabIdEnum.PROFILE);

  const handleModalAction = (id: ModalId) => {
    dispatch(openModal(id));
  };

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
          onAction={handleModalAction}
        />
      </Box>
    </Box>
  );
};
