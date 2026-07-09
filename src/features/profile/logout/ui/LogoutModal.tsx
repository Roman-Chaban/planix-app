import { useTranslation } from 'react-i18next';

import { ModalId, useModal } from '@/app/providers/modal';
import { ROUTES } from '@/app/routes';
import { NAMESPACE as NS } from '@/shared/i18n';
import { useLocalizedRouter } from '@/shared/lib/hooks';
import { Button, Modal, ModalActions, ModalContent } from '@/shared/ui';

import { useLogout } from '../model/useLogout';

import { LogoutContent } from './LogoutContent';
import styles from './LogoutModal.module.scss';
import { LogoutModalGraphic } from './LogoutModalGraphic';

const { DASHBOARD } = ROUTES;

export const LogoutModal = () => {
  const { t } = useTranslation(NS.LOGOUT_MODAL);

  const localizedRouter = useLocalizedRouter();

  const { closeModal, isModalOpen } = useModal();

  const { logout, isLoading } = useLogout();

  const handleLogout = async () => {
    await logout();

    closeModal();

    localizedRouter.replace(DASHBOARD);
  };

  return (
    <Modal isOpen={isModalOpen(ModalId.LOGOUT)} onClose={closeModal}>
      <ModalContent className={styles.content}>
        <LogoutModalGraphic />
        <LogoutContent title={t('modal.title')} subtitle={t('modal.subtitle')} />
        <ModalActions>
          <Button preset="MODAL_OUTLINE" minWidth="md" onClick={closeModal}>
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
