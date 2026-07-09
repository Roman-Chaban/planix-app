'use client';

import type { ModalId } from './model/modal-context.enums';

import { useMemo, useState } from 'react';

import type { WithChildren } from '@/shared/types/types';

import { ModalContext } from './ModalContext';

export const ModalProvider = ({ children }: WithChildren) => {
  const [openedModal, setOpenedModal] = useState<ModalId | null>(null);

  const value = useMemo(
    () => ({
      openedModal,
      openModal: setOpenedModal,
      closeModal: () => setOpenedModal(null),
      isModalOpen: (modal: ModalId) => openedModal === modal,
    }),
    [openedModal],
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
