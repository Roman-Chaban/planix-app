import { useTranslation } from 'react-i18next';

import { closeModal, ModalId, selectIsModalOpen, usePersistModal } from '@/entities/modal';
import { NAMESPACE as NS } from '@/shared/i18n';
import { useAppDispatch, useAppSelector } from '@/shared/providers/store/hooks';
import { Button, Modal, ModalActions, ModalContent } from '@/shared/ui';

import { useLogoutAction } from '../model/use-logout-action';

import { LogoutContent } from './logout-content';
import styles from './logout-modal.module.scss';
import { LogoutModalGraphic } from './logout-modal-graphic';

export const LogoutModal = () => {
  const { t } = useTranslation(NS.SETTINGS);

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
        <LogoutContent title={t('logout.modal.title')} subtitle={t('logout.modal.subtitle')} />
        <ModalActions>
          <Button preset="MODAL_OUTLINE" minWidth="md" onClick={handleClose}>
            {t('logout.modal.cancelLabel')}
          </Button>
          <Button preset="MODAL_DEFAULT" minWidth="md" onClick={handleLogout} isLoading={isLoading}>
            {t('logout.modal.logoutLabel')}
          </Button>
        </ModalActions>
      </ModalContent>
    </Modal>
  );
};
