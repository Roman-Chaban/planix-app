import type { TFunction } from 'i18next';

import type { ComponentType, SVGProps } from 'react';

export type SidebarProps = {
  isSidebarOpen?: boolean;
  toggleSidebar: () => void;
};

export type SidebarNavItemData = {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
};

export type SidebarNavItemProps = SidebarNavItemData & {
  isActive?: boolean;
  isCollapsed?: boolean;
  t: TFunction;
};

export type SidebarNavProps = {
  isCollapsed?: boolean;
  t: TFunction;
};
