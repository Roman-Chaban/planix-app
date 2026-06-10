import type { ReactNode } from 'react';

export type SidebarProviderProps = {
  children: ReactNode;
};

export type SidebarContextValue = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  hydrated: boolean;
};
