import type { RegisterFormSchema } from '@/features/auth/registration';
import type { FormFieldConfig } from '@/shared/ui/form-fields';
import {
  CalendarIcon,
  ClientIcon,
  ContactIcon,
  LockIcon,
  MessageIcon,
  ViewOffIcon,
} from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

export const { TEXT, EMAIL, PASSWORD } = INPUT_TYPES;

export const registerFormFields: readonly FormFieldConfig<RegisterFormSchema>[] =
  [
    {
      name: 'fullName',
      label: 'fullName',
      type: TEXT,
      placeholder: 'fullNamePlaceholder',
      autoComplete: 'name',
      startIcon: <ClientIcon width={20} height={20} />,
    },
    {
      name: 'email',
      label: 'email',
      type: EMAIL,
      placeholder: 'emailPlaceholder',
      autoComplete: 'email',
      startIcon: <MessageIcon />,
    },
    {
      name: 'password',
      label: 'password',
      type: PASSWORD,
      placeholder: 'passwordPlaceholder',
      autoComplete: 'new-password',
      feature: 'password-toggle',
      startIcon: <LockIcon />,
      endIcon: <ViewOffIcon />,
    },
    {
      name: 'confirmPassword',
      label: 'confirmPassword',
      type: PASSWORD,
      placeholder: 'confirmPasswordPlaceholder',
      feature: 'password-toggle',
      autoComplete: 'new-password',
      startIcon: <LockIcon />,
      endIcon: <ViewOffIcon />,
    },
    {
      name: 'contact',
      label: 'contact',
      type: TEXT,
      placeholder: 'contactPlaceholder',
      autoComplete: 'tel',
      startIcon: <ContactIcon />,
    },
    {
      name: 'birthDate',
      label: 'birthDate',
      type: TEXT,
      placeholder: 'birthDatePlaceholder',
      autoComplete: 'bday',
      startIcon: <CalendarIcon />,
    },
  ] as const;
