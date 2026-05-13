'use client';

import { type FC } from 'react';

import { createPortal } from 'react-dom';

import { useModalBehavior } from '@/shared/hooks/useModalBehavior';

import { ModalContent, ModalHeader, ModalOverlay } from '@/shared/ui/modal/index';
import type { ModalProps } from '@/shared/ui/modal/model/types';

export const Modal: FC<ModalProps> = ({ isOpen, onClose, closeOnOverlayClick = true }) => {
  useModalBehavior({ isOpen, onClose });

  if (!isOpen) return null;

  return createPortal(
    <ModalOverlay onClose={onClose} closeOnOverlayClick={closeOnOverlayClick}>
      <ModalContent>
        <ModalHeader onClose={onClose} />
      </ModalContent>
    </ModalOverlay>,
    document.body,
  );
};
