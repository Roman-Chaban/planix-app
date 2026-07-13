'use client';

import { ModalOverlay, Portal } from '@/shared/ui';
import { useModalBehavior, type ModalProps } from '@/shared/ui/modal';

export const Modal = ({ isOpen, onClose, closeOnOverlayClick = true, children }: ModalProps) => {
  useModalBehavior({ isOpen, onClose });

  if (!isOpen) return null;

  return (
    <Portal containerId="modal-root">
      <ModalOverlay onClose={onClose} closeOnOverlayClick={closeOnOverlayClick}>
        {children}
      </ModalOverlay>
    </Portal>
  );
};
