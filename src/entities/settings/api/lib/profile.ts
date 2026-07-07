import { AVATARS, PROFILES } from '@/shared/api';
import { supabase } from '@/shared/api/supabase';

import { mapProfile } from './profile.mapper';

export const getProfile = async (userId: string) => {
  const { data, error } = await supabase.from(PROFILES).select('*').eq('id', userId).single();

  if (error) {
    throw error;
  }

  const profile = mapProfile(data);

  if (data.avatar_url) {
    const { data: signedUrlData, error: signedUrlError } = await supabase.storage
      .from(AVATARS)
      .createSignedUrl(data.avatar_url, 60 * 60);

    if (signedUrlError) {
      throw signedUrlError;
    }

    profile.avatarUrl = signedUrlData.signedUrl;
  }

  return profile;
};
