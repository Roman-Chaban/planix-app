import type { Project } from '../model/types';

import { PROJECTS, supabase } from '@/shared/api';

export const createProject = async (project: Partial<Project>): Promise<Project> => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) {
    throw authError;
  }

  if (!user) {
    throw new Error("User aren't authenticated yet");
  }

  const projectWithUser = {
    ...project,
    user_id: user.id,
  };

  const { data, error } = await supabase.from(PROJECTS).insert([projectWithUser]).select().single();

  if (error) {
    throw error;
  }

  return data;
};
