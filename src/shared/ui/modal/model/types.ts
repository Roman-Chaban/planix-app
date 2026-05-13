import { type ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  closeOnOverlayClick?: boolean;
  onClose: () => void;
};
