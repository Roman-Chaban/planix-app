'use client';

import { type FC } from 'react';

import { createPortal } from 'react-dom';

import { ModalContent, ModalOverlay } from '@/shared/ui/modal';
import type { ModalProps } from '@/shared/ui/modal/model/types';
import { useModalBehavior } from '@/shared/ui/modal/model/useModalBehavior';

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
