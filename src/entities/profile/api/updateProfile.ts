import type { ProfileFormValues } from '@/features/profile/update';
import { ID, PROFILES, supabase } from '@/shared/api';

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
