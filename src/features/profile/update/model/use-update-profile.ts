'use client';

import type { ProfileUpdateFormProps } from '../ui/profile-update-form';

import { useEffect } from 'react';

import { useProfile } from '@/entities/profile';

import { useAppForm } from '@/shared/lib/hooks';

import { updateSchema, type UpdateFormValues } from './schema';
import { useUpdateForm } from './use-update-form';

export const useUpdateProfile = ({ onSuccess }: ProfileUpdateFormProps) => {
  const { profile, refetch } = useProfile();
  const mutation = useUpdateForm();

  const editForm = useAppForm<UpdateFormValues>({
    schema: updateSchema,
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      contact: '',
      email: '',
      birthDate: '',
    },
  });

  const {
    formState: { isValid },
  } = editForm;

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

  const onSubmit = async (data: UpdateFormValues) => {
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
    isValid,
    error: mutation.error,
  };
};
