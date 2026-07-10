import { combineReducers } from '@reduxjs/toolkit';

import { modalReducer } from '@/entities/modal';
import { toastReducer } from '@/entities/toast';

export const rootReducer = combineReducers({
  modal: modalReducer,
  toast: toastReducer,
});
