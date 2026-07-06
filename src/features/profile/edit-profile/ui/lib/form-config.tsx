import type { ProfileFormValues } from '../model/types';

import type { FormFieldConfig } from '@/shared/ui/form/form-fields';
import { INPUT_TYPES } from '@/shared/ui/input';

const { TEXT, EMAIL } = INPUT_TYPES;

import styles from '../ui/ProfileEditForm.module.scss';

export const editFields: readonly FormFieldConfig<ProfileFormValues>[] = [
  {
    name: 'firstName',
    label: 'profileDetails.firstName',
    type: TEXT,
    gridArea: 'firstName',
    className: styles.firstName,
  },
  {
    name: 'lastName',
    label: 'profileDetails.lastName',
    type: TEXT,
    gridArea: 'lastName',
    className: styles.lastName,
  },
  {
    name: 'email',
    label: 'profileDetails.email',
    type: EMAIL,
    gridArea: 'email',
    className: styles.email,
  },
  {
    name: 'birthDate',
    label: 'profileDetails.birthDate',
    type: TEXT,
    gridArea: 'birthDate',
    className: styles.birthDate,
  },
  {
    name: 'contact',
    label: 'profileDetails.contact',
    type: TEXT,
    gridArea: 'contact',
    className: styles.contact,
  },
] as const;
