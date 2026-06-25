import dayjs from 'dayjs';

import type { Profile, ProfileDto } from '@/entities/profile';

export const mapProfile = (data: ProfileDto): Profile => {
  const [firstName, ...rest] = (data.full_name ?? '').trim().split(' ');
  const lastName = rest.join(' ') || '';

  const birthDate = data.birth_date ? new Date(data.birth_date) : null;
  const createdAt = new Date(data.created_at);

  return {
    id: data.id,
    email: data.email,
    fullName: data.full_name,
    contact: data.contact,

    birthDate,
    createdAt,

    firstName,
    lastName,

    birthDateFormatted: birthDate ? dayjs(birthDate).format('DD MMM YYYY') : '',

    createdAtFormatted: dayjs(createdAt).format('DD MMM YYYY'),
  };
};
