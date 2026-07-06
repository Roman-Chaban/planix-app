import type { WithChildren } from '@/shared/types/types';
import { Box } from '@/shared/ui';

import styles from './Modal.module.scss';

export const ModalContent = ({ children }: WithChildren) => {
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
