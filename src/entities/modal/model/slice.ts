import type { ModalId, ModalState } from './types';

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: ModalState = {
  activeModal: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    openModal(state, action: PayloadAction<ModalId>) {
      state.activeModal = action.payload;
    },

    closeModal(state) {
      state.activeModal = null;
    },

    toggleModal(state, action: PayloadAction<ModalId>) {
      state.activeModal = state.activeModal === action.payload ? null : action.payload;
    },
  },
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
