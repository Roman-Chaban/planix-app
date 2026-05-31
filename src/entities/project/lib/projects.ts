import type { Project } from '@/widgets/project-table/model/types';
import { supabase } from '@/shared/api/supabase';

export const getProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from('Projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const createProject = async (project: Partial<Project>): Promise<Project> => {
  const { data, error } = await supabase.from('Projects').insert([project]).select().single();

  if (error) throw error;
  return data;
};

export const updateProject = async (
  id: string,
  updatedData: Partial<Project>,
): Promise<Project> => {
  const { data, error } = await supabase
    .from('Projects')
    .update(updatedData)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteProject = async (id: string): Promise<void> => {
  const { error } = await supabase.from('Projects').delete().eq('id', id);

  if (error) throw error;
};
