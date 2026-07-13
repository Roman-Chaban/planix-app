import type { RootState } from '@/app/providers/store';

export const selectToast = (state: RootState) => state.toast.current;

export const isSelectToastOpen = (state: RootState) => state.toast.current !== null;

export const selectToastVariant = (state: RootState) => state.toast.current?.variant;

export const selectToastDescription = (state: RootState) => state.toast.current?.description;
