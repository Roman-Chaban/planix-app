'use client';

import { useCallback, useEffect, useState } from 'react';

import {
  SidebarContext,
  type SidebarContextValue,
  type SidebarProviderProps,
} from '@/app/providers/sidebar';

const STORAGE_KEY = 'sidebar-collapsed';

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsSidebarOpen(JSON.parse(saved));
    }

    setHydrated(true);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => {
      const next = !prev;

      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

      return next;
    });
  }, []);

  const value: SidebarContextValue = {
    isSidebarOpen,
    toggleSidebar,
    hydrated,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
