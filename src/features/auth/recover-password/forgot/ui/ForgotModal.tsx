'use client';

import type { ForgotModalProps } from '../model/forgot.types';

import { useTranslation } from 'react-i18next';

import { closeModal, ModalId, selectIsModalOpen } from '@/entities/modal';
import { NAMESPACE as NS } from '@/shared/i18n';
import { useAppDispatch, useAppSelector } from '@/shared/providers/store/hooks';
import { Button, Modal, ModalContent, Typography } from '@/shared/ui';

import { CloseIcon } from '@/shared/ui/icons';

import styles from './ForgotForm.module.scss';

export const ForgotModal = ({ email }: ForgotModalProps) => {
  const { t } = useTranslation(NS.AUTH);

  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectIsModalOpen(ModalId.VERIFY_EMAIL));

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalContent className={styles.modalContent}>
        <Typography as="h2" className={styles.modalTitle}>
          {t('forgot.modal.checkYourEmail')}
        </Typography>

        <Typography as="p" className={styles.modalSubtitle}>
          {t('forgot.modal.passwordResetLinkSent')}

          <Typography as="strong" className={styles.modalEmail}>
            {email}
          </Typography>
        </Typography>

        <Button onClick={handleClose} preset="MODAL_CLOSE" className={styles.modalClose}>
          <CloseIcon />
        </Button>
      </ModalContent>
    </Modal>
  );
};
