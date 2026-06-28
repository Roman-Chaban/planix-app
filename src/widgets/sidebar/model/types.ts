import type { ComponentType, SVGProps } from 'react';

import type { TranslateFn } from '@/shared/types/types';

export type SidebarProps = {
  isSidebarOpen?: boolean;
  toggleSidebar: () => void;
};

export type NavItemData = {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
};

export type NavItemProps = NavItemData & {
  isActive?: boolean;
  isCollapsed?: boolean;
  t: TranslateFn;
};

export type NavProps = {
  isCollapsed?: boolean;
  t: TranslateFn;
};
