import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '@/app/providers/store/hooks';
import { closeModal, ModalId, selectIsModalOpen, usePersistModal } from '@/entities/modal';
import { NAMESPACE as NS } from '@/shared/i18n';
import { Button, Modal, ModalActions, ModalContent } from '@/shared/ui';

import { useLogoutAction } from '../model/useLogoutAction';

import { LogoutContent } from './LogoutContent';
import styles from './LogoutModal.module.scss';
import { LogoutModalGraphic } from './LogoutModalGraphic';

export const LogoutModal = () => {
  const { t } = useTranslation(NS.LOGOUT_MODAL);

  usePersistModal(ModalId.LOGOUT, 'logout-modal');

  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectIsModalOpen(ModalId.LOGOUT));

  const { handleLogout, isLoading } = useLogoutAction();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalContent className={styles.content}>
        <LogoutModalGraphic />
        <LogoutContent title={t('modal.title')} subtitle={t('modal.subtitle')} />
        <ModalActions>
          <Button preset="MODAL_OUTLINE" minWidth="md" onClick={handleClose}>
            {t('modal.cancelLabel')}
          </Button>
          <Button preset="MODAL_DEFAULT" minWidth="md" onClick={handleLogout} isLoading={isLoading}>
            {t('modal.logoutLabel')}
          </Button>
        </ModalActions>
      </ModalContent>
    </Modal>
  );
};
