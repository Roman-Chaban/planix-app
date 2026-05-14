import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { ProjectDeleteModalProps } from '@/widgets/projects/model/types';

import styles from '@/widgets/projects/styles/projects.module.scss';
import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/constants/buttons';
import { Button, Modal } from '@/shared/ui';
import { CloseIcon } from '@/shared/ui/icons';
import { ModalHeader, ModalActions } from '@/shared/ui/modal';
import { Textarea } from '@/shared/ui/textarea/ui/Textarea';

export const ProjectDeleteModal: FC<ProjectDeleteModalProps> = ({ projectId, onClose, isOpen }) => {
  const { t } = useTranslation();

  // TODO: implement delete mutation
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
      <ModalActions className={styles.actions}>
        <Button
          fullWidth
          type={BUTTON_TYPES.BUTTON}
          variant={BUTTON_VARIANTS.OUTLINE}
          size={BUTTON_SIZES.LARGE}
          onClick={onClose}
          className={styles.cancel}
        >
          {t('ProjectsModal.Content.cancel')}
        </Button>
        <Button
          fullWidth
          type={BUTTON_TYPES.BUTTON}
          variant={BUTTON_VARIANTS.DEFAULT}
          size={BUTTON_SIZES.LARGE}
          onClick={handleDelete}
          className={styles.save}
        >
          {t('ProjectsModal.Content.save')}
        </Button>
      </ModalActions>
    </Modal>
  );
};
