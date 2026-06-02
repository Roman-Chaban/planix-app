/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'sidebar-collapsed';

export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved !== null) {
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

  return {
    isSidebarOpen,
    toggleSidebar,
    hydrated,
  };
};
