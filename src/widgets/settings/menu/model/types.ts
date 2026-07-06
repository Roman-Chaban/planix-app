import type { ComponentType } from 'react';

import { type IsAuthenticated, type TranslateFn } from '@/shared/types/types';

type WithActiveMenu = {
  activeId: ProfileTabId;
  setActiveId: (id: ProfileTabId) => void;
};

export type ProfileTabId = 'profile' | 'notifications' | 'subscription' | 'system';
export type MenuActionId = 'logout';
export type MenuId = ProfileTabId | MenuActionId;

type BaseMenuItem = {
  label: string;
  requiresAuth?: boolean;
};

export type ProfileTabMenuItem = BaseMenuItem & {
  type: 'tab';
  id: ProfileTabId;
  component: ComponentType;
};

export type ActionMenuItem = BaseMenuItem & {
  type: 'action';
  id: MenuActionId;
};

export type MenuItem = ProfileTabMenuItem | ActionMenuItem;

export type MenuItems = MenuItem[];

export type MenuItemProps = ProfileTabMenuItem & {
  t: TranslateFn;
  isActive: boolean;
  disabled?: boolean;
  setActiveId: (id: ProfileTabId) => void;
};

export type MenuProps = WithActiveMenu &
  IsAuthenticated & {
    t: TranslateFn;
  };

export type ProfileMenuProps = WithActiveMenu & IsAuthenticated;
