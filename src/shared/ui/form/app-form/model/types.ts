import type { WithChildren } from '@types';

import type { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

export type AppFormProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  className?: string;
  onSubmit: SubmitHandler<T>;
} & WithChildren;
