import type { WithChildren, WithClassName } from '@/shared/types/types';

import { Box } from '../../box';

import styles from './Modal.module.scss';

export type ModalActionsProps = WithChildren & WithClassName;

export const ModalActions = ({ children, className }: ModalActionsProps) => {
  return <Box className={`${styles.actions} ${className || ''}`}>{children}</Box>;
};
