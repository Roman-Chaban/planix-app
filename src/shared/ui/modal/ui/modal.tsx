'use client';

import { ModalOverlay, Portal } from '@/shared/ui';

import { type ModalProps } from '../model/types';
import { useModalBehavior } from '../model/use-modal-behavior';

export const Modal = ({
  isOpen,
  onClose,
  closeOnOverlayClick = true,
  children,
  containerId = 'modal-root',
}: ModalProps) => {
  useModalBehavior({ isOpen, onClose });

  if (!isOpen) return null;

  return (
    <Portal containerId={containerId}>
      <ModalOverlay onClose={onClose} closeOnOverlayClick={closeOnOverlayClick}>
        {children}
      </ModalOverlay>
    </Portal>
  );
};
