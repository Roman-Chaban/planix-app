'use client';

import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import {
  useDeleteProject,
  type DeleteProjectModalProps,
} from '@/features/project-delete';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { Modal, ModalHeader, Textarea, Box, Button } from '@/shared/ui';
import {
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button/model/constants';
import { CloseIcon } from '@/shared/ui/icons';

import styles from './DeleteModal.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { OUTLINE, DEFAULT } = BUTTON_VARIANTS;
const { LARGE } = BUTTON_SIZES;

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

      <Box className={styles.actions}>
        <Button
          fullWidth
          type={BUTTON}
          variant={OUTLINE}
          size={LARGE}
          className={styles.cancel}
          onClick={handleDeleteProject}
        >
          {t('cancelButton')}
        </Button>

        <Button
          fullWidth
          type={BUTTON}
          variant={DEFAULT}
          size={LARGE}
          disabled={isDeleted}
          className={styles.save}
          onClick={onClose}
        >
          {t('saveButton')}
        </Button>
      </Box>
    </Modal>
  );
};
