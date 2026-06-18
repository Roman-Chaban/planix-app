import type { ReactNode } from 'react';

type WithOnClose = {
  onClose: () => void;
};

type WithChildren = {
  children: ReactNode;
};

type WithIsOpen = {
  isOpen: boolean;
};

export type ModalProps = WithChildren &
  WithIsOpen &
  WithOnClose & {
    closeOnOverlayClick?: boolean;
  };

export type ModalHeaderProps = WithOnClose & {
  title: string;
  icon?: ReactNode;
};

export type UseModalBehaviorParams = WithIsOpen & WithOnClose;

export type ModalOverlayProps = WithChildren &
  WithOnClose & {
    closeOnOverlayClick: boolean;
  };
