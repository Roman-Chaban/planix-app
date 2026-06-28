import {
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';

import type { WithChildren } from '@/shared/types/types';

export type AppFormProps<T extends FieldValues> = WithChildren & {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  className?: string;
};
