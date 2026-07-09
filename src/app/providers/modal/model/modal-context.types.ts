import type { ModalId } from './modal-context.enums';

export type ModalContextValue = {
  openedModal: ModalId | null;
  openModal: (modal: ModalId) => void;
  closeModal: () => void;
  isModalOpen: (modal: ModalId) => boolean;
};
