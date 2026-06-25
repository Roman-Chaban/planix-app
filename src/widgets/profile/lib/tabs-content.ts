import type { ProfileTabMap } from '@/widgets/profile/model/types';
import { ProfileDetails } from '@/widgets/profile/ui/details';
import { Notifications } from '@/widgets/profile/ui/notifications';

export const PROFILE_TABS: ProfileTabMap = {
  personal: ProfileDetails,
  notifications: Notifications,
};
