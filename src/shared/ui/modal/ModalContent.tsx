import type { FC, ReactNode } from 'react';

import { Box } from '@/shared/ui/index';

import styles from '@/shared/ui/modal/Modal.module.scss';

export const ModalContent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      className={styles.modal}
      onClick={(event) => event.stopPropagation()}
      role="dialog"
      aria-modal="true"
    >
      <Box className={styles.content}>{children}</Box>
    </Box>
  );
};
