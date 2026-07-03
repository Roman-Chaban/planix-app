import type { ComponentType } from 'react';

import { type TranslateFn } from '@/shared/types/types';

type WithActiveMenu = {
  activeId: string;
  setActiveId: (id: string) => void;
};

type MenuItemBase = {
  id: string;
  label: string;
};

export type MenuItem = MenuItemBase;

export type MenuItemProps = MenuItemBase & {
  t: TranslateFn;
  isActive: boolean;
  setActiveId: (id: string) => void;
};

export type MenuProps = WithActiveMenu & { t: TranslateFn };
export type ProfileMenuProps = WithActiveMenu;
export type MenuItems = MenuItem[];

export type ProfileTabId = 'profile' | 'notifications' | 'subscription';

export type ProfileTabComponent = ComponentType;

export type ProfileTabMap = Record<ProfileTabId, ProfileTabComponent>;
export type TabId = ProfileTabId;
