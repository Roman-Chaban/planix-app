import type { DetailsFieldConfig } from '../model/details.types';

import type { Profile } from '@/entities/profile';

export const profileFields: DetailsFieldConfig[] = [
  {
    key: 'firstName',
    label: 'profileDetails.firstName',
    getter: (profile: Profile) => profile.firstName,
  },
  {
    key: 'lastName',
    label: 'profileDetails.lastName',
    getter: (profile: Profile) => profile.lastName,
  },
  {
    key: 'birthDate',
    label: 'profileDetails.birthDate',
    getter: (profile: Profile) => profile.birthDateFormatted,
  },
  {
    key: 'email',
    label: 'profileDetails.email',
    getter: (profile: Profile) => profile.email,
  },
  {
    key: 'contact',
    label: 'profileDetails.contact',
    getter: (profile: Profile) => profile.contact,
  },
];
