import type { Project } from '@/entities/project';
import { CREATED_AT, PROJECTS } from '@/shared/api';
import { supabase } from '@/shared/api/supabase';

export const getProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from(PROJECTS)
    .select('*')
    .order(CREATED_AT, { ascending: false });

  if (error) throw error;
  return data || [];
};
