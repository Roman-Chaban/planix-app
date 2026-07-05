'use client';

import { createContext } from 'react';

import type { SidebarContextValue } from '@/app/providers/sidebar';

export const SidebarContext = createContext<null | SidebarContextValue>(null);
