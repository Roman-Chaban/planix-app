import type { DeleteModalActionsProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Button, ModalActions, Textarea, Tooltip } from '@/shared/ui';

import { TOOLTIP_POSITION } from '@/shared/ui/tooltip';

import styles from './delete-modal.module.scss';

const { BOTTOM } = TOOLTIP_POSITION;

export const DeleteModalActions = ({
  reason,
  isDeleting,
  error,
  canDelete,
  onReasonChange,
  onDelete,
  onClose,
}: DeleteModalActionsProps) => {
  const { t } = useTranslation(NS.DELETE_MODAL);

  return (
    <>
      <Textarea
        value={reason}
        onChange={(event) => onReasonChange(event.target.value)}
        placeholder={t('fieldPlaceholder')}
        label={t('fieldLabel')}
        error={error ? t('deleteError') : undefined}
        disabled={isDeleting}
      />

      <ModalActions className={styles.deleteActions}>
        <Button preset="MODAL_OUTLINE" className={styles.cancel} onClick={onClose}>
          {t('cancelAction')}
        </Button>

        <Tooltip position={BOTTOM} message={t('tooltipMessage')}>
          <Button
            preset="MODAL_DEFAULT"
            disabled={!canDelete}
            isLoading={isDeleting}
            className={styles.save}
            onClick={onDelete}
          >
            {t('saveAction')}
          </Button>
        </Tooltip>
      </ModalActions>
    </>
  );
};
