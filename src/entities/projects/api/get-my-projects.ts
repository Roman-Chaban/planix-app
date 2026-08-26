import type { Projects } from '@types';

import { CREATED_AT, PROJECTS, supabase } from '@/shared/api';

export const getMyProjects = async (): Promise<Projects> => {
  const { data, error } = await supabase
    .from(PROJECTS)
    .select('*')
    .order(CREATED_AT, { ascending: false });

  if (error) {
    throw error;
  }

  return data ?? [];
};
