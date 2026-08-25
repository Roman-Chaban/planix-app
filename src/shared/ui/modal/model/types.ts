import type { WithChildren, WithClassName } from '@types';

import type { ReactNode } from 'react';

type WithOnClose = {
  onClose: () => void;
};

type WithIsOpen = {
  isOpen: boolean;
};

export type ModalProps = WithChildren &
  WithIsOpen &
  WithOnClose & {
    closeOnOverlayClick?: boolean;
    containerId?: string;
  };

export type ModalContentProps = WithChildren & WithClassName;

export type ModalHeaderProps = WithOnClose & {
  title: string;
  icon?: ReactNode;
};

export type UseModalBehaviorParams = WithIsOpen & WithOnClose;

export type ModalOverlayProps = WithChildren &
  WithOnClose & {
    closeOnOverlayClick: boolean;
  };
