'use client';

import { createContext } from 'react';

import type { SidebarContextValue } from '@/features/sidebar';

export const SidebarContext = createContext<null | SidebarContextValue>(null);
