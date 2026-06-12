'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import type { DeleteProjectActionsProps } from '@/features/project-delete';
import { Button, Box } from '@/shared/ui';
import {
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button/model/constants';

import styles from './DeleteModal.module.scss';

export const DeleteModalActions: FC<DeleteProjectActionsProps> = ({
  onClose,
  onDelete,
  disabled,
}) => {
  const { t } = useTranslation('modal');

  return (
    <Box className={styles.actions}>
      <Button
        fullWidth
        type={BUTTON_TYPES.BUTTON}
        variant={BUTTON_VARIANTS.OUTLINE}
        size={BUTTON_SIZES.LARGE}
        className={styles.cancel}
        onClick={onClose}
      >
        {t('cancelButton')}
      </Button>

      <Button
        fullWidth
        type={BUTTON_TYPES.BUTTON}
        variant={BUTTON_VARIANTS.DEFAULT}
        size={BUTTON_SIZES.LARGE}
        disabled={disabled}
        className={styles.save}
        onClick={onDelete}
      >
        {t('saveButton')}
      </Button>
    </Box>
  );
};
