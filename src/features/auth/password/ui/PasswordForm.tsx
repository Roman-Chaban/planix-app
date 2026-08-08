import type { PasswordFormProps } from '../model/password.types';
import type { FieldValues } from 'react-hook-form';

import { AppForm, FormFields } from '@/shared/ui';

export const PasswordForm = <T extends FieldValues>({
  form,
  onSubmit,
  fields,
  translationNamespace,
  children,
  className,
}: PasswordFormProps<T>) => {
  return (
    <AppForm form={form} onSubmit={onSubmit} className={className}>
      <FormFields fields={fields} translationNamespace={translationNamespace} />

      {children}
    </AppForm>
  );
};
