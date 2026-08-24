import type { UpdateProjectQueryParamsOptions } from '../model/types';

import { PROJECT_QUERY_KEYS, PROJECT_TOOLBAR_NAMES } from './constants';

const { SEARCH, STATUS, PLATFORM } = PROJECT_QUERY_KEYS;
const { ALL_PROJECTS } = PROJECT_TOOLBAR_NAMES;

export const updateProjectQueryParams = ({
  searchParams,
  updates,
}: UpdateProjectQueryParamsOptions) => {
  const params = new URLSearchParams(searchParams);

  if ('search' in updates) {
    const value = updates.search ?? '';

    if (value.trim()) {
      params.set(SEARCH, value);
    } else {
      params.delete(SEARCH);
    }
  }

  if ('status' in updates) {
    if (!updates.status || updates.status === ALL_PROJECTS) {
      params.delete(STATUS);
    } else {
      params.set(STATUS, updates.status);
    }
  }

  if ('platform' in updates) {
    if (updates.platform == null) {
      params.delete(PLATFORM);
    } else {
      params.set(PLATFORM, updates.platform);
    }
  }

  return params;
};
