import type { FieldValues, Path, UseFormSetError } from 'react-hook-form';

export type LogoSize =
  | {
      geometry: number;
      width?: never;
      height?: never;
    }
  | {
      geometry?: never;
      width: number;
      height: number;
    };

export type FormErrorType = 'server' | 'manual' | 'validate';

export type SetFormErrorParams<T extends FieldValues> = {
  form: {
    setError: UseFormSetError<T>;
  };
  fields: Path<T>[];
  message: string;
  type?: FormErrorType;
};
