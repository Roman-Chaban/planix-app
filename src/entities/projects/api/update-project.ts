import type { Project } from '../model/types';

import { ID, PROJECTS, supabase } from '@/shared/api';

export const updateProject = async (
  id: string | number,
  updatedData: Partial<Project>,
): Promise<Project> => {
  const { data, error } = await supabase
    .from(PROJECTS)
    .update(updatedData)
    .eq(ID, id)
    .select()
    .single();

  if (error) throw error;
  return data;
};
