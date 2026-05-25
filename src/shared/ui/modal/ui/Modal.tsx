'use client';

import { type FC } from 'react';

import { createPortal } from 'react-dom';

import { ModalContent, ModalOverlay } from '@/shared/ui';
import { useModalBehavior, type ModalProps } from '@/shared/ui/modal';

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  closeOnOverlayClick = true,
  children,
}) => {
  useModalBehavior({ isOpen, onClose });

  if (!isOpen) return null;

  return createPortal(
    <ModalOverlay onClose={onClose} closeOnOverlayClick={closeOnOverlayClick}>
      <ModalContent>{children}</ModalContent>
    </ModalOverlay>,
    document.body,
  );
};
