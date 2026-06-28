import type { ProfileEditFormProps, ProfileFormValues } from './types';

import { useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { useProfile } from '@/entities/settings';
import { supabase } from '@/shared/api/supabase';

export const useEditProfile = ({ onSuccess }: ProfileEditFormProps) => {
  const { data: profile, refetch } = useProfile();

  const form = useForm<ProfileFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      contact: '',
      email: '',
      birthDate: '',
    },
  });

  useEffect(() => {
    if (profile) {
      form.reset({
        firstName: profile.firstName,
        lastName: profile.lastName,
        contact: profile.contact,
        birthDate: profile.birthDateFormatted,
        email: profile.email,
      });
    }
  }, [form, profile]);

  const onSubmit = async (data: ProfileFormValues) => {
    await editProfile(data);
  };

  const editProfile = async (data: ProfileFormValues) => {
    if (!profile?.id) return;

    const fullName = `${data.firstName} ${data.lastName}`.trim();

    const { error } = await supabase
      .from('profiles')
      .update({
        full_name: fullName,
        contact: data.contact,
        email: data.email,
        birth_date: data.birthDate,
      })
      .eq('id', profile.id);

    if (error) throw error;

    await refetch();
    onSuccess?.();
  };

  return { editProfile, profile, onSubmit, form };
};
