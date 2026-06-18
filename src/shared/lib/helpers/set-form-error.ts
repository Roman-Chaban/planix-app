import type { FieldValues, UseFormSetError, Path } from 'react-hook-form';

type FormErrorType = 'server' | 'manual' | 'validate';

type SetFormErrorParams<T extends FieldValues> = {
  form: {
    setError: UseFormSetError<T>;
  };
  fields: Path<T>[];
  message: string;
  type?: FormErrorType;
};

export const setFormErrors = <T extends FieldValues>({
  form,
  fields,
  message,
  type = 'server',
}: SetFormErrorParams<T>) => {
  fields.forEach((field) => {
    form.setError(field, {
      type,
      message,
    });
  });
};
