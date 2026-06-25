import { supabase } from '@/shared/api/supabase';

import { mapProfile } from './profile.mappers';

export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    throw error;
  }

  return mapProfile(data);
};
