import type { ProfileTabMap } from '../model/types';

import { Notifications } from '@/features/profile/notifications-profile';

import { ProfileDetails } from '../../profile-details';
import { Subscription } from '../../subscription-billing';

export const PROFILE_TABS: ProfileTabMap = {
  profile: ProfileDetails,
  notifications: Notifications,
  subscription: Subscription,
};
