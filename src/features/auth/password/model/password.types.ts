import type { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

import type { WithChildren, WithClassName } from '@types';
import type { FormFieldConfig } from '@/shared/ui/form/form-fields';

export type PasswordFormProps<T extends FieldValues> = WithChildren &
  WithClassName & {
    form: UseFormReturn<T>;
    onSubmit: SubmitHandler<T>;
    fields: readonly FormFieldConfig<T>[];
    translationNamespace: string;
  };
