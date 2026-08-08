import { AVATARS, ID, PROFILES, supabase } from '@/shared/api';
import { getAvatarPath } from '@/shared/lib';

export const uploadProfileAvatar = async (userId: string, file: File) => {
  const filePath = getAvatarPath(userId, file);

  const { error: uploadError } = await supabase.storage.from(AVATARS).upload(filePath, file, {
    upsert: true,
  });

  if (uploadError) {
    throw uploadError;
  }

  const { error: profileError } = await supabase
    .from(PROFILES)
    .update({
      avatar_url: filePath,
    })
    .eq(ID, userId);

  if (profileError) {
    throw profileError;
  }

  return filePath;
};
