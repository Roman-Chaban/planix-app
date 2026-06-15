'use client';

import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import {
  useDeleteProject,
  type DeleteProjectModalProps,
  DeleteModalActions,
} from '@/features/project-delete';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { Modal, ModalHeader, Textarea } from '@/shared/ui';
import { CloseIcon } from '@/shared/ui/icons';

import styles from './DeleteModal.module.scss';

export const DeleteModal: FC<DeleteProjectModalProps> = ({
  projectId,
  onClose,
  isOpen,
}) => {
  const { t } = useTranslation(NS.MODAL);

  const {
    handleClose,
    handleDeleteProject,
    isProjectActionPending,
    reason,
    setReason,
    isDeleted,
  } = useDeleteProject({
    projectId,
    onClose,
  });

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalHeader
        onClose={handleClose}
        title={t('title')}
        icon={<CloseIcon />}
      />

      <Textarea
        value={reason}
        onChange={(event) => setReason(event.target.value)}
        placeholder={t('placeholder')}
        label={t('label')}
        textareaClassName={styles.textarea}
        labelClassName={styles.reasonLabel}
        disabled={isProjectActionPending}
      />

      <DeleteModalActions
        onClose={handleClose}
        onDelete={handleDeleteProject}
        disabled={!isDeleted}
      />
    </Modal>
  );
};
