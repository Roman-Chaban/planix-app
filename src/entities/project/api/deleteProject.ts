import { ID, PROJECTS, supabase } from '@/shared/api';

export const deleteProject = async (id: string | number): Promise<void> => {
  const { error } = await supabase.from(PROJECTS).delete().eq(ID, id);

  if (error) throw error;
};
