import type { MenuItems } from '../model/setting-menu.types';

import { Notifications } from '@/features/profile';

import { ModalId } from '@/entities/modal';

import { Details } from '../../details';
import { Subscription } from '../../subscription';
import { System } from '../../system';
import { MenuTabType, SettingTabIdEnum } from '../model/setting-menu.enums';

export const SETTINGS_MENU: MenuItems = [
  {
    id: SettingTabIdEnum.PROFILE,
    label: 'settingsMenu.myProfile',
    requiresAuth: true,
    component: Details,
    type: MenuTabType.TAB,
  },
  {
    id: SettingTabIdEnum.NOTIFICATIONS,
    label: 'settingsMenu.notificationSettings',
    requiresAuth: false,
    component: Notifications,
    type: MenuTabType.TAB,
  },
  {
    id: SettingTabIdEnum.SUBSCRIPTION,
    label: 'settingsMenu.subscription',
    requiresAuth: true,
    component: Subscription,
    type: MenuTabType.TAB,
  },
  {
    id: SettingTabIdEnum.SYSTEM,
    label: 'settingsMenu.systemSettings',
    requiresAuth: false,
    component: System,
    type: MenuTabType.TAB,
  },
  {
    id: ModalId.LOGOUT,
    label: 'settingsMenu.logOut',
    requiresAuth: true,
    type: MenuTabType.ACTIONS,
  },
] as const;
