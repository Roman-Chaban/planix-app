import type { ProfileFormValues } from '../model/edit-profile.types';

import type { FormFieldConfig } from '@/shared/ui/form/form-fields';
import { CalendarIcon, ClientIcon, ContactIcon, MessageIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { TEXT, EMAIL } = INPUT_TYPES;

import styles from '../ui/ProfileEditForm.module.scss';

export const editFields: readonly FormFieldConfig<ProfileFormValues>[] = [
  {
    name: 'firstName',
    label: 'profileDetails.firstName',
    type: TEXT,
    className: styles.firstName,
    startIcon: <ClientIcon />,
  },
  {
    name: 'lastName',
    label: 'profileDetails.lastName',
    type: TEXT,
    className: styles.lastName,
    startIcon: <ClientIcon />,
  },
  {
    name: 'email',
    label: 'profileDetails.email',
    type: EMAIL,
    className: styles.email,
    startIcon: <MessageIcon />,
  },
  {
    name: 'birthDate',
    label: 'profileDetails.birthDate',
    type: TEXT,
    className: styles.birthDate,
    startIcon: <CalendarIcon />,
  },
  {
    name: 'contact',
    label: 'profileDetails.contact',
    type: TEXT,
    className: styles.contact,
    startIcon: <ContactIcon />,
  },
] as const;
