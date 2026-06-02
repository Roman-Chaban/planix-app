import type { ComponentType, SVGProps } from 'react';

export type SidebarBaseProps = {
  isCollapsed?: boolean;
};

export type SidebarNavProps = SidebarBaseProps;

export type SidebarProps = {
  isSidebarOpen?: boolean;
  toggleSidebar: () => void;
};

export type SidebarNavItem = {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  isActive?: boolean;
} & SidebarBaseProps;

export type SidebarNavItems = SidebarNavItem[];
