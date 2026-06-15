import type { FormFieldConfig } from '@/shared/ui/form-fields';
import { MessageIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

export type RegisterFormValues = {
  email: string;
};

const { EMAIL } = INPUT_TYPES;

export const registerFormFields: readonly FormFieldConfig<RegisterFormValues>[] =
  [
    {
      name: 'email',
      label: 'emailLabel',
      type: EMAIL,
      placeholder: 'emailPlaceholder',
      autoComplete: 'email',
      startIcon: <MessageIcon width={20} height={20} />,
    },
  ] as const;
