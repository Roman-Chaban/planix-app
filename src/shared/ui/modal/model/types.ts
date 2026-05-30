import type { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  closeOnOverlayClick?: boolean;
  onClose: () => void;
};

export type ModalHeaderProps = {
  title: string;
  icon?: ReactNode;
  onClose: () => void;
};

export type UseModalBehaviorParams = {
  isOpen: boolean;
  onClose: () => void;
};
