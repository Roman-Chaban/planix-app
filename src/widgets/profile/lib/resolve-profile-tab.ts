import {
  PROFILE_TABS,
  DEFAULT_PROFILE_TAB,
  type TabId,
} from '@/widgets/profile';

export const resolveProfileTab = (tab: string | null | undefined): TabId => {
  if (!tab) return DEFAULT_PROFILE_TAB;

  return tab in PROFILE_TABS ? (tab as TabId) : DEFAULT_PROFILE_TAB;
};
