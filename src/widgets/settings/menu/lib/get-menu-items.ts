import type { MenuItems } from '../model/types';

import type { TFunction } from 'i18next';

export const getProfileMenuItems = (t: TFunction): MenuItems => {
  return [
    {
      id: 'profile',
      label: t('profileMenu.myProfile'),
    },
    {
      id: 'notifications',
      label: t('profileMenu.notificationSettings'),
    },
    {
      id: 'subscription',
      label: t('profileMenu.subscription'),
    },
    {
      id: 'system',
      label: t('profileMenu.systemSettings'),
    },
    {
      id: 'logout',
      label: t('profileMenu.logOut'),
    },
  ];
};
