import type { WithChildren } from '@types';

import { type FieldValues, type SubmitHandler, type UseFormReturn } from 'react-hook-form';

export type AppFormProps<T extends FieldValues> = WithChildren & {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  className?: string;
};
