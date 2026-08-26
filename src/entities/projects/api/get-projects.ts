import type { Projects } from '@types';

import { CREATED_AT, PROJECTS } from '@/shared/api';
import { supabase } from '@/shared/api/supabase';

export const getProjects = async (): Promise<Projects> => {
  const { data, error } = await supabase
    .from(PROJECTS)
    .select('*')
    .order(CREATED_AT, { ascending: false });

  if (error) throw error;
  return data || [];
};
