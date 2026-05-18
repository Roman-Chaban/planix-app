import type { ComponentType, SVGProps } from 'react';

export type SidebarNavItem = {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  isActive?: boolean;
};

export type SidebarNavItems = SidebarNavItem[];
