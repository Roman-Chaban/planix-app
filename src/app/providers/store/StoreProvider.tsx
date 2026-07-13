'use client';

import type { WithChildren } from '@types';

import { Provider } from 'react-redux';

import { store } from './store';

export const StoreProvider = ({ children }: WithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
