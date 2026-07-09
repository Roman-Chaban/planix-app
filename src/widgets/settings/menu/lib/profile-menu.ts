import type { MenuItems } from '../model/menu.types';

import { ModalId } from '@/app/providers/modal';
import { Notifications } from '@/features/profile';

import { ProfileDetails } from '../../profile-details';
import { Subscription } from '../../subscription-billing';
import { System } from '../../system';
import { MenuTabType, ProfileTabIdEnum } from '../model/menu.enums';

export const PROFILE_MENU: MenuItems = [
  {
    id: ProfileTabIdEnum.PROFILE,
    label: 'profileMenu.myProfile',
    requiresAuth: true,
    component: ProfileDetails,
    type: MenuTabType.TAB,
  },
  {
    id: ProfileTabIdEnum.NOTIFICATIONS,
    label: 'profileMenu.notificationSettings',
    requiresAuth: false,
    component: Notifications,
    type: MenuTabType.TAB,
  },
  {
    id: ProfileTabIdEnum.SUBSCRIPTION,
    label: 'profileMenu.subscription',
    requiresAuth: true,
    component: Subscription,
    type: MenuTabType.TAB,
  },
  {
    id: ProfileTabIdEnum.SYSTEM,
    label: 'profileMenu.systemSettings',
    requiresAuth: false,
    component: System,
    type: MenuTabType.TAB,
  },
  {
    id: ModalId.LOGOUT,
    label: 'profileMenu.logOut',
    requiresAuth: true,
    type: MenuTabType.ACTIONS,
  },
] as const;
