import type { TFunction } from 'i18next';

type BaseProps = {
  isActive: boolean;
  setActiveId: (id: string) => void;
};

export type MenuItem = {
  id: string;
  label: string;
};

export type MenuItemProps = {
  id: string;
  label: string;
  t: TFunction;
} & BaseProps;

export type MenuProps = {
  t: TFunction;
} & BaseProps;

export type ProfileMenuProps = BaseProps;

export type MenuItems = MenuItem[];
