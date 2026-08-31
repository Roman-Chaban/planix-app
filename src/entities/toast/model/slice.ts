import type { ToastPayload, ToastState } from './types';

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: ToastState = { current: null };

export const toastSlice = createSlice({
  name: 'toast',
  initialState: initialState,
  reducers: {
    showToast(state, action: PayloadAction<ToastPayload>) {
      state.current = action.payload;
    },

    hideToast(state) {
      state.current = null;
    },
  },
});

export const toastReducer = toastSlice.reducer;

export const { showToast, hideToast } = toastSlice.actions;
