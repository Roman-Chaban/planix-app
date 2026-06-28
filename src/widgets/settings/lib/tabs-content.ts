import type { ProfileTabMap } from '../model/types';

import { Notifications } from '@/features/profile/notifications-profile';

import { ProfileDetails } from '../ui/details';

export const PROFILE_TABS: ProfileTabMap = {
  personal: ProfileDetails,
  notifications: Notifications,
};
