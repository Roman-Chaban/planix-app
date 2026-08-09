'use client';

import { useTranslation } from 'react-i18next';

import { useDeleteProjectModal, type DeleteProjectModalProps } from '@/features/project-delete';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Modal, ModalHeader, Textarea, Button, ModalContent, ModalActions } from '@/shared/ui';
import { CloseIcon } from '@/shared/ui/icons';

import styles from './DeleteProjectModal.module.scss';

export const DeleteProjectModal = ({ projectId, onClose, isOpen }: DeleteProjectModalProps) => {
  const { t } = useTranslation(NS.MODAL);

  const { handleClose, handleDeleteProject, isProjectActionPending, reason, setReason, isDeleted } =
    useDeleteProjectModal({
      projectId,
      onClose,
    });

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalContent className={styles.content}>
        <ModalHeader onClose={handleClose} title={t('title')} icon={<CloseIcon />} />

        <Textarea
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          placeholder={t('placeholder')}
          label={t('label')}
          textareaClassName={styles.textarea}
          labelClassName={styles.reasonLabel}
          disabled={isProjectActionPending}
        />

        <ModalActions>
          <Button preset="MODAL_OUTLINE" minWidth="lg" className={styles.cancel} onClick={onClose}>
            {t('cancelButton')}
          </Button>

          <Button
            preset="MODAL_DEFAULT"
            minWidth="lg"
            disabled={!isDeleted}
            className={styles.save}
            onClick={handleDeleteProject}
          >
            {t('saveButton')}
          </Button>
        </ModalActions>
      </ModalContent>
    </Modal>
  );
};
