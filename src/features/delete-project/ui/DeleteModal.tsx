'use client';

import type { DeleteModalProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Modal, ModalHeader, Textarea, Button, ModalContent, ModalActions } from '@/shared/ui';
import { CloseIcon } from '@/shared/ui/icons';

import styles from './DeleteModal.module.scss';

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

        <Textarea
          value={reason}
          onChange={(event) => onReasonChange(event.target.value)}
          placeholder={t('fieldPlaceholder')}
          label={t('fieldLabel')}
          textareaClassName={styles.textarea}
          labelClassName={styles.reasonLabel}
          disabled={isDeleting}
          error={error ? t('deleteError') : undefined}
        />

        <ModalActions>
          <Button preset="MODAL_OUTLINE" minWidth="lg" className={styles.cancel} onClick={onClose}>
            {t('cancelAction')}
          </Button>

          <Button
            preset="MODAL_DEFAULT"
            minWidth="lg"
            disabled={!canDelete}
            isLoading={isDeleting}
            className={styles.save}
            onClick={onDelete}
          >
            {t('saveAction')}
          </Button>
        </ModalActions>
      </ModalContent>
    </Modal>
  );
};
