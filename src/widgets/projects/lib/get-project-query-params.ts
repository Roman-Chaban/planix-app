import type { PlatformId, TabId } from '@types';

import { PROJECT_QUERY_KEYS, PROJECT_TOOLBAR_NAMES } from '../model/constants';

const { ALL_PROJECTS } = PROJECT_TOOLBAR_NAMES;

export const getProjectQueryParams = (searchParams: URLSearchParams) => ({
  search: searchParams.get(PROJECT_QUERY_KEYS.SEARCH) ?? '',
  status: (searchParams.get(PROJECT_QUERY_KEYS.STATUS) ?? ALL_PROJECTS) as TabId,
  platform: searchParams.get(PROJECT_QUERY_KEYS.PLATFORM) as PlatformId | null,
});
