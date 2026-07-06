'use client';

import { useTranslation } from 'react-i18next';

import { useDeleteProjectModal, type DeleteProjectModalProps } from '@/features/project-delete';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Modal, ModalHeader, Textarea, Box, Button } from '@/shared/ui';
import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/ui/button/lib/constants';
import { CloseIcon } from '@/shared/ui/icons';

import styles from './DeleteProjectModal.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { OUTLINE, DEFAULT } = BUTTON_VARIANTS;
const { LARGE } = BUTTON_SIZES;

export const DeleteProjectModal = ({ projectId, onClose, isOpen }: DeleteProjectModalProps) => {
  const { t } = useTranslation(NS.MODAL);

  const { handleClose, handleDeleteProject, isProjectActionPending, reason, setReason, isDeleted } =
    useDeleteProjectModal({
      projectId,
      onClose,
    });

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
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

      <Box className={styles.actions}>
        <Button
          fullWidth
          type={BUTTON}
          variant={OUTLINE}
          size={LARGE}
          className={styles.cancel}
          onClick={onClose}
        >
          {t('cancelButton')}
        </Button>

        <Button
          fullWidth
          type={BUTTON}
          variant={DEFAULT}
          size={LARGE}
          disabled={!isDeleted}
          className={styles.save}
          onClick={handleDeleteProject}
        >
          {t('saveButton')}
        </Button>
      </Box>
    </Modal>
  );
};
