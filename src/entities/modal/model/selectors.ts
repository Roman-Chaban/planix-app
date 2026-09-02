import type { ModalId } from './types';

import type { RootState } from '@/shared/providers/store';

export const selectActiveModal = (state: RootState) => state.modal.activeModal;

export const selectIsModalOpen = (id: ModalId) => (state: RootState) =>
  state.modal.activeModal === id;
