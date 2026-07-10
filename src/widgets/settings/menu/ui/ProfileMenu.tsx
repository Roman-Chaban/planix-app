'use client';

import type { ProfileMenuProps } from '../model/menu.types';

import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '@/app/providers/store/hooks';
import { ModalId, selectIsModalOpen } from '@/entities/modal';
import { openModal } from '@/entities/modal/model/modal.slice';
import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, Typography } from '@/shared/ui';

import { ProfileTabIdEnum } from '../model/menu.enums';

import { Menu } from './Menu';
import styles from './ProfileMenu.module.scss';

export const ProfileMenu = ({ activeId, setActiveId, isAuthenticated }: ProfileMenuProps) => {
  const { t } = useTranslation(NS.SETTINGS);
  const dispatch = useAppDispatch();

  const isLogoutModalOpen = useAppSelector(selectIsModalOpen(ModalId.LOGOUT));

  const selectedId = isLogoutModalOpen ? ModalId.LOGOUT : (activeId ?? ProfileTabIdEnum.PROFILE);

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
