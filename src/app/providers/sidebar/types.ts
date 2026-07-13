import type { WithChildren } from '@types';

export type SidebarProviderProps = WithChildren;

export type SidebarContextValue = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  hydrated: boolean;
};
