import dayjs from 'dayjs';

import type { Profile, ProfileDto } from '@/entities/profile';
import { DATE_FORMAT, getInitials, splitFullName } from '@/shared/lib';

export const mapProfile = (data: ProfileDto): Profile => {
  const { firstName, lastName } = splitFullName(data.full_name);
  const initials = getInitials(firstName, lastName);

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
    initials,
    birthDateFormatted: birthDate
      ? dayjs(birthDate).format(DATE_FORMAT.DISPLAY)
      : '',
    createdAtFormatted: dayjs(createdAt).format(DATE_FORMAT.DISPLAY),
  };
};
