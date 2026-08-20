import { Box } from '@/shared/ui';

import type { ModalOverlayProps } from '@/shared/ui/modal';

import styles from './modal.module.scss';

export const ModalOverlay = ({ children, onClose, closeOnOverlayClick }: ModalOverlayProps) => {
  return (
    <Box className={styles.overlay} onClick={closeOnOverlayClick ? onClose : undefined}>
      {children}
    </Box>
  );
};
