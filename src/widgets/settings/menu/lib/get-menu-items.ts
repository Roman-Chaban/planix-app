import type { MenuItems } from '../model/types';

export const PROFILE_MENU: MenuItems = [
  {
    id: 'profile',
    label: 'profileMenu.myProfile',
  },
  {
    id: 'notifications',
    label: 'profileMenu.notificationSettings',
  },
  {
    id: 'subscription',
    label: 'profileMenu.subscription',
  },
  {
    id: 'system',
    label: 'profileMenu.systemSettings',
  },
  {
    id: 'logout',
    label: 'profileMenu.logOut',
  },
] as const;
