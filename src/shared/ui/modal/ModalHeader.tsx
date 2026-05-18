import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Box, Button, Typography } from '@/shared/ui/index';

import styles from '@/shared/ui/modal/Modal.module.scss';
import type { ModalHeaderProps } from '@/shared/ui/modal/modal.types';

export const ModalHeader: FC<ModalHeaderProps> = ({ onClose, title, icon }) => {
  const { t } = useTranslation();

  return (
    <Box className={styles.header}>
      <Typography as="h3" className={styles.title}>
        {t(title)}
      </Typography>

      <Button className={styles.button} onClick={onClose}>
        {icon}
      </Button>
    </Box>
  );
};
