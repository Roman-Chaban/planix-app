import type { MenuItems } from '../model/types';

import type { TFunction } from 'i18next';

export const getProfileMenuItems = (t: TFunction): MenuItems => {
  return [
    {
      id: 'personal',
      label: t('profileMenu.myProfile'),
    },
    {
      id: 'notifications',
      label: t('profileMenu.notificationSettings'),
    },
    {
      id: 'subscriptionAndBilling',
      label: t('profileMenu.subscription'),
    },
    {
      id: 'systemSetting',
      label: t('profileMenu.systemSettings'),
    },
    {
      id: 'logOut',
      label: t('profileMenu.logOut'),
    },
  ];
};
