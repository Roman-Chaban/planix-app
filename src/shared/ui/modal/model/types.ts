import type { WithChildren, WithClassName } from '@types';

import type { ReactNode } from 'react';

type WithOnClose = {
  onClose: () => void;
};

type WithIsOpen = {
  isOpen: boolean;
};

export type ModalProps = {
  closeOnOverlayClick?: boolean;
  containerId?: string;
} & WithChildren &
  WithIsOpen &
  WithOnClose;

export type ModalContentProps = WithChildren & WithClassName;

export type ModalHeaderProps = {
  title: string;
  icon?: ReactNode;
} & WithOnClose;

export type UseModalBehaviorParams = WithIsOpen & WithOnClose;

export type ModalOverlayProps = {
  closeOnOverlayClick: boolean;
} & WithChildren &
  WithOnClose;
