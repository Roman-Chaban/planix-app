import type { RegisterFormSchema } from '@/features/auth/registration';
import type { FormFieldConfig } from '@/shared/ui/form/form-fields';
import {
  ClientIcon,
  ContactIcon,
  LockIcon,
  MessageIcon,
  ViewOffIcon,
} from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

export const { TEXT, EMAIL, PASSWORD, DATE } = INPUT_TYPES;

export const registerFormFields: readonly FormFieldConfig<RegisterFormSchema>[] =
  [
    {
      name: 'fullName',
      label: 'register.fullName',
      type: TEXT,
      placeholder: 'register.fullNamePlaceholder',
      autoComplete: 'name',
      startIcon: <ClientIcon width={20} height={20} />,
    },
    {
      name: 'email',
      label: 'register.email',
      type: EMAIL,
      placeholder: 'register.emailPlaceholder',
      autoComplete: 'email',
      startIcon: <MessageIcon />,
    },
    {
      name: 'password',
      label: 'register.password',
      type: PASSWORD,
      placeholder: 'register.passwordPlaceholder',
      autoComplete: 'new-password',
      feature: 'password-toggle',
      startIcon: <LockIcon />,
      endIcon: <ViewOffIcon />,
    },
    {
      name: 'confirmPassword',
      label: 'register.confirmPassword',
      type: PASSWORD,
      placeholder: 'register.confirmPasswordPlaceholder',
      feature: 'password-toggle',
      autoComplete: 'new-password',
      startIcon: <LockIcon />,
      endIcon: <ViewOffIcon />,
    },
    {
      name: 'contact',
      label: 'register.contact',
      type: TEXT,
      placeholder: 'register.contactPlaceholder',
      autoComplete: 'tel',
      startIcon: <ContactIcon />,
    },
  ] as const;
