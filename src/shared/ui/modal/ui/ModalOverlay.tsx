import type { FC, ReactNode } from 'react';

import { Box } from '@/shared/ui';

import styles from './Modal.module.scss';

type ModalOverlayProps = {
  children: ReactNode;
  onClose: () => void;
  closeOnOverlayClick: boolean;
};

export const ModalOverlay: FC<ModalOverlayProps> = ({ children, onClose, closeOnOverlayClick }) => {
  return (
    <Box className={styles.overlay} onClick={closeOnOverlayClick ? onClose : undefined}>
      {children}
    </Box>
  );
};
