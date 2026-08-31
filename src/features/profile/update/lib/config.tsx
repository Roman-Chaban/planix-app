import type { UpdateFormValues } from '../model/schema';

import { FORM_FIELD_TYPES } from '@/shared/ui/form/form-field';
import type { FormFieldConfig } from '@/shared/ui/form/form-fields';
import { CalendarIcon, ClientIcon, ContactIcon, MessageIcon } from '@/shared/ui/icons';

const { TEXT, EMAIL } = FORM_FIELD_TYPES;

import styles from '../ui/ProfileUpdateForm.module.scss';

export const updateFields: readonly FormFieldConfig<UpdateFormValues>[] = [
  {
    name: 'firstName',
    label: 'profileDetails.firstName',
    placeholder: 'profileDetails.firstName',
    required: true,
    type: TEXT,
    className: styles.firstName,
    startIcon: <ClientIcon />,
  },
  {
    name: 'lastName',
    label: 'profileDetails.lastName',
    placeholder: 'profileDetails.lastName',
    required: true,
    type: TEXT,
    className: styles.lastName,
    startIcon: <ClientIcon />,
  },
  {
    name: 'email',
    label: 'profileDetails.email',
    placeholder: 'profileDetails.email',
    required: true,
    type: EMAIL,
    className: styles.email,
    startIcon: <MessageIcon />,
  },
  {
    name: 'birthDate',
    label: 'profileDetails.birthDate',
    placeholder: 'profileDetails.birthDate',
    required: true,
    type: TEXT,
    className: styles.birthDate,
    startIcon: <CalendarIcon />,
  },
  {
    name: 'contact',
    label: 'profileDetails.contact',
    placeholder: 'profileDetails.contact',
    required: true,
    type: TEXT,
    className: styles.contact,
    startIcon: <ContactIcon />,
  },
] as const;
