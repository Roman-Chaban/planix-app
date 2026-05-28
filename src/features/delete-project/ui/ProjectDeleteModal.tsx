'use client';

import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import { useDeleteProject, type ProjectDeleteModalProps } from '@/features/delete-project';
import { Modal, ModalHeader, ModalActions, Textarea } from '@/shared/ui';
import { CloseIcon } from '@/shared/ui/icons';

import styles from './ProjectsDeleteModal.module.scss';

export const ProjectDeleteModal: FC<ProjectDeleteModalProps> = ({ projectId, onClose, isOpen }) => {
  const { t } = useTranslation('modal');

  const { handleClose, handleDeleteProject, isProjectActionPending, reason, setReason } =
    useDeleteProject({
      projectId,
      onClose,
    });

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalHeader onClose={handleClose} title={t('title')} icon={<CloseIcon />} />
      <Textarea
        value={reason}
        onChange={(event) => setReason(event.target.value)}
        placeholder={t('label')}
        label={t('label')}
        textareaClassName={styles.textarea}
        labelClassName={styles.reasonLabel}
        disabled={isProjectActionPending}
      />
      <ModalActions onClose={handleClose} handleDeleteProject={handleDeleteProject} />
    </Modal>
  );
};
