import type { ModalContextValue } from './model/modal-context.types';

import { createContext } from 'react';

export const ModalContext = createContext<ModalContextValue | null>(null);
