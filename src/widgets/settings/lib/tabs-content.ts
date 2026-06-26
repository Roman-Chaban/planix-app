import type { ProfileTabMap } from '../model/types';

import { ProfileDetails } from '../ui/details';
import { Notifications } from '../ui/notifications';

export const PROFILE_TABS: ProfileTabMap = {
  personal: ProfileDetails,
  notifications: Notifications,
};
