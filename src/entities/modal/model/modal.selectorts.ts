import type { ModalId } from './modal.types';

import type { RootState } from '@/app/providers/store';

export const selectActiveModal = (state: RootState) => state.modal.activeModal;

export const selectIsModalOpen = (id: ModalId) => (state: RootState) =>
  state.modal.activeModal === id;
