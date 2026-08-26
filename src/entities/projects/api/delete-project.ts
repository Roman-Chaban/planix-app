import { ID, PROJECTS, supabase } from '@/shared/api';

export const deleteProject = async (id: string | number): Promise<void> => {
  const { data, error } = await supabase.from(PROJECTS).delete().eq(ID, id).select(ID);

  if (error) throw error;

  if (!data?.length) {
    throw new Error('Project was not deleted. Check the project id and database permissions.');
  }
};
