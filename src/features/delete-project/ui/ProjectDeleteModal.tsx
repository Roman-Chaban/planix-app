'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { ProjectDeleteModalProps } from '@/features/delete-project';

import { Modal, ModalHeader, ModalActions, Textarea } from '@/shared/ui';
import { CloseIcon } from '@/shared/ui/icons';

import styles from './ProjectsDeleteModal.module.scss';

export const ProjectDeleteModal: FC<ProjectDeleteModalProps> = ({ projectId, onClose, isOpen }) => {
  const { t } = useTranslation('modal');

  // TODO: [Implement delete mutation]
  const handleDelete = () => {
    if (!projectId) return;

    console.log('Delete id:', projectId);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader onClose={onClose} title={t('title')} icon={<CloseIcon />} />
      <Textarea
        placeholder={t('label')}
        label={t('label')}
        textareaClassName={styles.textarea}
        labelClassName={styles.reasonLabel}
      />
      <ModalActions onClose={onClose} handleDelete={handleDelete} />
    </Modal>
  );
};
