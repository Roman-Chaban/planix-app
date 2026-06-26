import type { ProfileFieldConfig } from '../model/types';
import type { TFunction } from 'i18next';

import type { Profile } from '@/entities/profile';

export const getInfoFields = (
  profile: Profile,
  t: TFunction,
): ProfileFieldConfig[] => [
  {
    key: 'firstName',
    label: t('profileDetails.firstName'),
    value: profile.firstName,
  },
  {
    key: 'lastName',
    label: t('profileDetails.lastName'),
    value: profile.lastName,
  },
  {
    key: 'birthDate',
    label: t('profileDetails.birthDate'),
    value: profile.birthDate,
  },
  {
    key: 'email',
    label: t('profileDetails.email'),
    value: profile.email,
  },
  {
    key: 'contact',
    label: t('profileDetails.contact'),
    value: profile.contact,
  },
];
