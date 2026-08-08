import type { SVGComponent, TranslateFn } from '@types';

export type NavItemData = {
  id: string;
  icon: SVGComponent;
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
