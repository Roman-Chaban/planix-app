import { ProfileDetails } from '@/widgets/profile/ui/details';
import type {
  ProfileTabMap,
  ProfileTabId,
} from '@/widgets/profile/model/types';
import { Notifications } from '@/widgets/profile/ui/notifications';

export const PROFILE_TABS: ProfileTabMap = {
  personal: ProfileDetails,
  notifications: Notifications,
};

export const DEFAULT_PROFILE_TAB: ProfileTabId = 'personal';

export type TabId = ProfileTabId;

export const resolveProfileTab = (tab: string | null | undefined): TabId => {
  if (!tab) return DEFAULT_PROFILE_TAB;

  return tab in PROFILE_TABS ? (tab as TabId) : DEFAULT_PROFILE_TAB;
};
