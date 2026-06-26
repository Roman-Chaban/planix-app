import type { TFunction } from 'i18next';

export type MenuItem = {
  id: string;
  label: string;
};

export type MenuItemProps = {
  id: string;
  label: string;
  t: TFunction;
  isActive: boolean;
  setActiveId: (id: string) => void;
};

export type MenuProps = {
  activeId: string;
  setActiveId: (id: string) => void;
  t: TFunction;
};

export type MenuItems = MenuItem[];
