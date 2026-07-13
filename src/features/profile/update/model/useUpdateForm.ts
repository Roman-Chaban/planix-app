'use client';

import type { UpdateFormValues } from './update.schema';

import { useMutation } from '@tanstack/react-query';

import { updateProfile } from '@/entities/profile';

export const useUpdateForm = () => {
  return useMutation({
    mutationFn: ({ profileId, data }: { profileId: string; data: UpdateFormValues }) =>
      updateProfile(profileId, data),
  });
};
