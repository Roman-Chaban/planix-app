import type { ProfileFormValues } from '../model/edit-profile.types';

import type { FormFieldConfig } from '@/shared/ui/form/form-fields';
import { INPUT_TYPES } from '@/shared/ui/input';

const { TEXT, EMAIL } = INPUT_TYPES;

import styles from '../ui/ProfileEditForm.module.scss';

export const editFields: readonly FormFieldConfig<ProfileFormValues>[] = [
  {
    name: 'firstName',
    label: 'profileDetails.firstName',
    type: TEXT,
    className: styles.firstName,
  },
  {
    name: 'lastName',
    label: 'profileDetails.lastName',
    type: TEXT,
    className: styles.lastName,
  },
  {
    name: 'email',
    label: 'profileDetails.email',
    type: EMAIL,
    className: styles.email,
  },
  {
    name: 'birthDate',
    label: 'profileDetails.birthDate',
    type: TEXT,
    className: styles.birthDate,
  },
  {
    name: 'contact',
    label: 'profileDetails.contact',
    type: TEXT,
    className: styles.contact,
  },
] as const;
