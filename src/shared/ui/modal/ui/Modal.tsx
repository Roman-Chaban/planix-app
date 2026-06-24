'use client';

import { type FC } from 'react';

import { ModalContent, ModalOverlay, Portal } from '@/shared/ui';
import { useModalBehavior, type ModalProps } from '@/shared/ui/modal';

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  closeOnOverlayClick = true,
  children,
}) => {
  useModalBehavior({ isOpen, onClose });

  if (!isOpen) return null;

  return (
    <Portal containerId="modal-root">
      <ModalOverlay onClose={onClose} closeOnOverlayClick={closeOnOverlayClick}>
        <ModalContent>{children}</ModalContent>
      </ModalOverlay>
    </Portal>
  );
};
