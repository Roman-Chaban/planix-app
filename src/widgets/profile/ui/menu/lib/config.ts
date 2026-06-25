import type { MenuItems } from '@/widgets/profile/ui/menu';

export const profileMenu: MenuItems = [
  {
    id: 'personal',
    label: 'profileMenu.myProfile',
  },
  {
    id: 'notifications',
    label: 'profileMenu.notificationSettings',
  },
  {
    id: 'subscriptionAndBilling',
    label: 'profileMenu.subscription',
  },
  {
    id: 'systemSetting',
    label: 'profileMenu.systemSettings',
  },
  {
    id: 'logOut',
    label: 'profileMenu.logOut',
  },
] as const;
