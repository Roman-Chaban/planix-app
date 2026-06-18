import type { FC } from 'react';

import { Box } from '@/shared/ui';

import type { ModalOverlayProps } from '@/shared/ui/modal';

import styles from './Modal.module.scss';

export const ModalOverlay: FC<ModalOverlayProps> = ({
  children,
  onClose,
  closeOnOverlayClick,
}) => {
  return (
    <Box
      className={styles.overlay}
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      {children}
    </Box>
  );
};
