'use client';

import type { SidebarContextValue } from './types';

import { createContext } from 'react';

export const SidebarContext = createContext<null | SidebarContextValue>(null);
