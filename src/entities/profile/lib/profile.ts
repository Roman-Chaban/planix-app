import type { ProfileFormValues } from '@/features/profile/update';
import { AVATARS, PROFILES, ID } from '@/shared/api';
import { supabase } from '@/shared/api/supabase';

import { getAvatarPath } from '@/shared/lib';

import { mapProfile } from './profile.mapper';

export const getProfile = async (userId: string) => {
  const { data, error } = await supabase.from(PROFILES).select('*').eq(ID, userId).single();

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

export const updateProfile = async (profileId: string, data: ProfileFormValues) => {
  const fullName = `${data.firstName} ${data.lastName}`.trim();

  const { error } = await supabase
    .from(PROFILES)
    .update({
      full_name: fullName,
      contact: data.contact,
      email: data.email,
      birth_date: data.birthDate,
    })
    .eq(ID, profileId);

  if (error) {
    throw error;
  }
};
