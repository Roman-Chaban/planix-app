import type { TFunction } from 'i18next';

import type { ComponentType, SVGProps } from 'react';

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
  t: TFunction;
};

export type NavProps = {
  isCollapsed?: boolean;
  t: TFunction;
};
