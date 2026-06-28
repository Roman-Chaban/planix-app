import type { ProfileFormValues } from '../model/types';

import type { FormFieldConfig } from '@/shared/ui/form/form-fields';
import { INPUT_TYPES } from '@/shared/ui/input';

const { TEXT, EMAIL } = INPUT_TYPES;

export const editFields: readonly FormFieldConfig<ProfileFormValues>[] = [
  {
    name: 'firstName',
    label: 'profileDetails.firstName',
    type: TEXT,
    gridArea: 'firstName',
  },
  {
    name: 'lastName',
    label: 'profileDetails.lastName',
    type: TEXT,
    gridArea: 'lastName',
  },
  {
    name: 'email',
    label: 'profileDetails.email',
    type: EMAIL,
    gridArea: 'email',
  },
  {
    name: 'birthDate',
    label: 'profileDetails.birthDate',
    type: TEXT,
    gridArea: 'birthDate',
  },
  {
    name: 'contact',
    label: 'profileDetails.contact',
    type: TEXT,
    gridArea: 'contact',
  },
] as const;
