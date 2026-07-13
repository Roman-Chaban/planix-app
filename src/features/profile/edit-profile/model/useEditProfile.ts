'use client';

import type { ProfileEditFormProps } from '../ui/ProfileEditForm';

import { useEffect } from 'react';

import { useProfile } from '@/entities/profile';

import { useAppForm } from '@/shared/lib/hooks';

import { profileEditSchema, type ProfileFormValues } from './edit-profile-schema';
import { useEditProfileMutation } from './useEditProfile.mutation';

export const useEditProfile = ({ onSuccess }: ProfileEditFormProps) => {
  const { profile, refetch } = useProfile();
  const mutation = useEditProfileMutation();

  const editForm = useAppForm<ProfileFormValues>({
    schema: profileEditSchema,
    defaultValues: {
      firstName: '',
      lastName: '',
      contact: '',
      email: '',
      birthDate: '',
    },
  });

  useEffect(() => {
    if (!profile) return;

    editForm.reset({
      firstName: profile.firstName,
      lastName: profile.lastName,
      contact: profile.contact,
      birthDate: profile.birthDateFormatted,
      email: profile.email,
    });
  }, [profile, editForm]);

  const onSubmit = async (data: ProfileFormValues) => {
    if (!profile?.id) return;

    await mutation.mutateAsync({
      profileId: profile.id,
      data,
    });

    await refetch();

    onSuccess?.();
  };

  return {
    form: editForm,
    profile,
    onSubmit,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
