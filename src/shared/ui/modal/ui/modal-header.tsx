'use client';

import type { ModalHeaderProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { Box } from '../../box';
import { Button } from '../../button';
import { Typography } from '../../typography';

import styles from './modal.module.scss';

export const ModalHeader = ({ onClose, title, icon }: ModalHeaderProps) => {
  const { t } = useTranslation();

  return (
    <Box className={styles.header}>
      <Typography as="h3" className={styles.title}>
        {t(title)}
      </Typography>

      <Button preset="MODAL_CLOSE" className={styles.button} onClick={onClose}>
        {icon}
      </Button>
    </Box>
  );
};
