import type { TabId } from '../model/types';

import { PROFILE_TABS } from '../lib/tabs-content';

import { DEFAULT_PROFILE_TAB } from './constants';

export const resolveProfileTab = (tab: string | null | undefined): TabId => {
  if (!tab) return DEFAULT_PROFILE_TAB;

  return tab in PROFILE_TABS ? (tab as TabId) : DEFAULT_PROFILE_TAB;
};
