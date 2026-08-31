'use client';

import type { SidebarContextValue } from './model/types';

import { createContext } from 'react';

export const SidebarContext = createContext<null | SidebarContextValue>(null);
