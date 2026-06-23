import type { TFunction } from 'i18next';

export type MenuItemProps = {
  id: string;
  label: string;
  t: TFunction;
  isActive: boolean;
  setActiveId: (id: string) => void;
};

export type MenuProps = {
  t: TFunction;
};
