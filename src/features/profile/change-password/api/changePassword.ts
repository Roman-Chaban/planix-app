import { supabase } from '@/shared/api';

export const changePassword = async (oldPassword: string, newPassword: string) => {
  const { error: reauthError } = await supabase.auth.reauthenticate({
    password: oldPassword,
  });

  if (reauthError) {
    throw reauthError;
  }

  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    throw error;
  }
};
