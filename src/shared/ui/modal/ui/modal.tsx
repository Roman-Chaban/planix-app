'use client';

import { Portal } from '../../portal';

import { type ModalProps } from '../model/types';
import { useModalBehavior } from '../model/use-modal-behavior';
import { ModalOverlay } from '../ui/modal-overlay';

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
