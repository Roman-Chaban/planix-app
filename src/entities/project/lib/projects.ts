import type { Project } from '@/entities/project';
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
  id: string | number,
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

export const deleteProject = async (id: string | number): Promise<void> => {
  const { error } = await supabase.from('Projects').delete().eq('id', id);

  if (error) throw error;
};
