import dayjs from 'dayjs';

import type { Profile, ProfileData } from '@/entities/settings';
import { DATE_FORMAT, getInitials, splitFullName } from '@/shared/lib';

export const mapProfile = (data: ProfileData): Profile => {
  const { firstName, lastName } = splitFullName(data.full_name);
  const initials = getInitials(firstName, lastName);

  const birthDate = data.birth_date ? new Date(data.birth_date) : null;
  const createdAt = new Date(data.created_at);
  const nextBillingDate = data.next_billing_date ? new Date(data.next_billing_date) : null;

  return {
    id: data.id,
    email: data.email,
    fullName: data.full_name,
    firstName,
    lastName,
    contact: data.contact,
    birthDate,
    createdAt,
    initials,
    createdAtFormatted: dayjs(createdAt).format(DATE_FORMAT.DISPLAY),
    birthDateFormatted: birthDate ? dayjs(birthDate).format(DATE_FORMAT.DISPLAY) : '',
    planName: data.plan_name,
    planPrice: data.plan_price ?? 0,
    nextBillingDate,
    nextBillingDateFormatted: nextBillingDate
      ? dayjs(nextBillingDate).format(DATE_FORMAT.DISPLAY)
      : '',
    avatarUrl: data.avatar_url,
  };
};
