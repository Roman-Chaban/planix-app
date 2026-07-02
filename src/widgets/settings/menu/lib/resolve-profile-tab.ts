import type { TabId } from '../model/types';

import { DEFAULT_PROFILE_TAB } from './menu.constants';
import { PROFILE_TABS } from './tabs-content';

export const resolveProfileTab = (tab: string | null | undefined): TabId => {
  if (!tab) return DEFAULT_PROFILE_TAB;

  return tab in PROFILE_TABS ? (tab as TabId) : DEFAULT_PROFILE_TAB;
};
