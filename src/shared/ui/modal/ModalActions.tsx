import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from '@/features/delete-project/ui/ProjectsDeleteModal.module.scss';

import { Button, Box } from '@/shared/ui';
import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/ui/button/model/constants';
import type { ModalActionsProps } from '@/shared/ui/modal/model/types';

export const ModalActions: FC<ModalActionsProps> = ({ onClose, handleDelete }) => {
  const { t } = useTranslation('modal');
  return (
    <Box className={styles.actions}>
      <Button
        fullWidth
        type={BUTTON_TYPES.BUTTON}
        variant={BUTTON_VARIANTS.OUTLINE}
        size={BUTTON_SIZES.LARGE}
        onClick={onClose}
        className={styles.cancel}
      >
        {t('cancelButton')}
      </Button>
      <Button
        fullWidth
        type={BUTTON_TYPES.BUTTON}
        variant={BUTTON_VARIANTS.DEFAULT}
        size={BUTTON_SIZES.LARGE}
        onClick={handleDelete}
        className={styles.save}
      >
        {t('saveButton')}
      </Button>
    </Box>
  );
};
