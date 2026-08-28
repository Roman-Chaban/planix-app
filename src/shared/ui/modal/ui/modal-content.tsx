import type { ModalContentProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import { Box } from '../../box';

import styles from './modal.module.scss';

export const ModalContent = ({ children, className }: ModalContentProps) => {
  return (
    <Box
      className={styles.modal}
      onClick={(event) => event.stopPropagation()}
      role="dialog"
      aria-modal="true"
    >
      <Box className={buildClassName(className, styles.content)}>{children}</Box>
    </Box>
  );
};
