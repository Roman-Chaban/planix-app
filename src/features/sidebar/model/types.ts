import type { WithChildren } from '@/shared/types/types';

export type SidebarProviderProps = WithChildren;

export type SidebarContextValue = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  hydrated: boolean;
};
