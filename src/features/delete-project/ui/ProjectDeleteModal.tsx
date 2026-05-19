import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { ProjectDeleteModalProps } from '@/features/delete-project/model/types';
import styles from '@/features/delete-project/ui/ProjectsDeleteModal.module.scss';

import { Modal } from '@/shared/ui';
import { CloseIcon } from '@/shared/ui/icons';
import { ModalHeader, ModalActions } from '@/shared/ui/modal';
import { Textarea } from '@/shared/ui/textarea/Textarea';

export const ProjectDeleteModal: FC<ProjectDeleteModalProps> = ({ projectId, onClose, isOpen }) => {
  const { t } = useTranslation();

  // TODO: [Implement delete mutation]
  const handleDelete = () => {
    if (!projectId) return;

    console.log('Delete id:', projectId);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader onClose={onClose} title={t('ProjectsModal.Header.title')} icon={<CloseIcon />} />
      <Textarea
        placeholder={t('ProjectsModal.Content.placeholder')}
        label={t('ProjectsModal.Content.label')}
        textareaClassName={styles.textarea}
        labelClassName={styles.reasonLabel}
      />
      <ModalActions onClose={onClose} handleDelete={handleDelete} />
    </Modal>
  );
};
