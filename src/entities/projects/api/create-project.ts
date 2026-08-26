import type { Project } from '../model/types';

import { PROJECTS, supabase } from '@/shared/api';

export const createProject = async (project: Partial<Project>): Promise<Project> => {
  const { data, error } = await supabase.from(PROJECTS).insert([project]).select().single();

  if (error) throw error;
  return data;
};
