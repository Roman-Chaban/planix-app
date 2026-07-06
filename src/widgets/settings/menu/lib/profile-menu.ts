import type { MenuItems } from '../model/types';

import { Notifications } from '@/features/profile';

import { Box } from '@/shared/ui';

import { ProfileDetails } from '../../profile-details';
import { Subscription } from '../../subscription-billing';

export const PROFILE_MENU: MenuItems = [
  {
    id: 'profile',
    label: 'profileMenu.myProfile',
    requiresAuth: true,
    component: ProfileDetails,
    type: 'tab',
  },
  {
    id: 'notifications',
    label: 'profileMenu.notificationSettings',
    requiresAuth: false,
    component: Notifications,
    type: 'tab',
  },
  {
    id: 'subscription',
    label: 'profileMenu.subscription',
    requiresAuth: true,
    component: Subscription,
    type: 'tab',
  },
  {
    id: 'system',
    label: 'profileMenu.systemSettings',
    requiresAuth: false,
    component: Box,
    type: 'tab',
  },
  {
    id: 'logout',
    label: 'profileMenu.logOut',
    requiresAuth: true,
    type: 'action',
  },
] as const;
