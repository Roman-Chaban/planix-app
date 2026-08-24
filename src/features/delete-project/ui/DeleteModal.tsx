'use client';

import type { DeleteModalProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Modal, ModalHeader, ModalContent } from '@/shared/ui';
import { CloseIcon } from '@/shared/ui/icons';

import styles from './DeleteModal.module.scss';
import { DeleteModalActions } from './DeleteModalActions';

export const DeleteModal = ({
  isOpen,
  reason,
  canDelete,
  isDeleting,
  error,
  onClose,
  onReasonChange,
  onDelete,
}: DeleteModalProps) => {
  const { t } = useTranslation(NS.MODAL);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent className={styles.content}>
        <ModalHeader onClose={onClose} title={t('heading')} icon={<CloseIcon />} />

        <DeleteModalActions
          reason={reason}
          canDelete={canDelete}
          isDeleting={isDeleting}
          error={error}
          onReasonChange={onReasonChange}
          onDelete={onDelete}
          onClose={onClose}
        />
      </ModalContent>
    </Modal>
  );
};
