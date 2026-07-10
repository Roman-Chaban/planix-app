'use client';

import { Provider } from 'react-redux';

import type { WithChildren } from '@/shared/types/types';

import { store } from './store';

export const StoreProvider = ({ children }: WithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
