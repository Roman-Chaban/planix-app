import type { MenuTabType, SettingTabIdEnum } from './setting-menu.enums';

import type { ComponentType } from 'react';

import type { ModalId } from '@/entities/modal';
import { type IsAuthenticated, type TranslateFn } from '@/shared/types/types';

type WithActiveMenu = {
  activeId: ProfileTabId;
  setActiveId: (id: ProfileTabId) => void;
};

export type ProfileTabId =
  | SettingTabIdEnum.PROFILE
  | SettingTabIdEnum.NOTIFICATIONS
  | SettingTabIdEnum.SUBSCRIPTION
  | SettingTabIdEnum.SYSTEM;

export type MenuActionId = ModalId.LOGOUT;

export type MenuId = ProfileTabId | MenuActionId;

type BaseMenuItem = {
  label: string;
  requiresAuth?: boolean;
};

export type ProfileTabMenuItem = BaseMenuItem & {
  type: MenuTabType.TAB;
  id: ProfileTabId;
  component: ComponentType;
};

export type ActionMenuItem = BaseMenuItem & {
  type: MenuTabType.ACTIONS;
  id: MenuActionId;
};

export type MenuItem = ProfileTabMenuItem | ActionMenuItem;

export type MenuItems = MenuItem[];

export type MenuItemProps = {
  label: string;
  disabled?: boolean;
  isActive: boolean;
  t: TranslateFn;
  onClick: () => void;
};

export type MenuProps = {
  selectedId: MenuId;
  isAuthenticated: boolean;
  onAction: (action: MenuActionId) => void;
  setActiveId: (id: ProfileTabId) => void;
  t: TranslateFn;
};

export type SettingMenuProps = WithActiveMenu & IsAuthenticated;
