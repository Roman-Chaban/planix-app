'use client';

import { useTranslation } from 'react-i18next';

import { Box, Button, Typography } from '@/shared/ui';

import type { ModalHeaderProps } from '@/shared/ui/modal';

import styles from './Modal.module.scss';

export const ModalHeader = ({ onClose, title, icon }: ModalHeaderProps) => {
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
