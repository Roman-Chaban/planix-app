'use client';

import type { ProfileFormValues } from './edit-profile-schema';

import { useMutation } from '@tanstack/react-query';

import { updateProfile } from '@/entities/profile';

export const useEditProfileMutation = () => {
  return useMutation({
    mutationFn: ({ profileId, data }: { profileId: string; data: ProfileFormValues }) =>
      updateProfile(profileId, data),
  });
};
