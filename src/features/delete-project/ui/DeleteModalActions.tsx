import type { DeleteModalActionsProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Button, ModalActions, Textarea } from '@/shared/ui';

import styles from './DeleteModal.module.scss';

export const DeleteModalActions = ({
  reason,
  isDeleting,
  error,
  canDelete,
  onReasonChange,
  onDelete,
  onClose,
}: DeleteModalActionsProps) => {
  const { t } = useTranslation(NS.MODAL);

  return (
    <>
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

      <ModalActions className={styles.deleteActions}>
        <Button preset="MODAL_OUTLINE" className={styles.cancel} onClick={onClose}>
          {t('cancelAction')}
        </Button>

        <Button
          preset="MODAL_DEFAULT"
          disabled={!canDelete}
          isLoading={isDeleting}
          className={styles.save}
          onClick={onDelete}
        >
          {t('saveAction')}
        </Button>
      </ModalActions>
    </>
  );
};
