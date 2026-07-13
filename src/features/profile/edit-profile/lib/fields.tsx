import type { ProfileFormValues } from '../model/edit-profile-schema';

import type { FormFieldConfig } from '@/shared/ui/form/form-fields';
import { CalendarIcon, ClientIcon, ContactIcon, MessageIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { TEXT, EMAIL } = INPUT_TYPES;

import styles from '../ui/ProfileEditForm.module.scss';

export const editFields: readonly FormFieldConfig<ProfileFormValues>[] = [
  {
    name: 'firstName',
    label: 'profileDetails.firstName',
    required: true,
    type: TEXT,
    className: styles.firstName,
    startIcon: <ClientIcon />,
  },
  {
    name: 'lastName',
    label: 'profileDetails.lastName',
    required: true,
    type: TEXT,
    className: styles.lastName,
    startIcon: <ClientIcon />,
  },
  {
    name: 'email',
    label: 'profileDetails.email',
    required: true,
    type: EMAIL,
    className: styles.email,
    startIcon: <MessageIcon />,
  },
  {
    name: 'birthDate',
    label: 'profileDetails.birthDate',
    required: true,
    type: TEXT,
    className: styles.birthDate,
    startIcon: <CalendarIcon />,
  },
  {
    name: 'contact',
    label: 'profileDetails.contact',
    required: true,
    type: TEXT,
    className: styles.contact,
    startIcon: <ContactIcon />,
  },
] as const;
