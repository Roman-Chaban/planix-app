import type { WithClassName } from '@types';
import type { Control, FieldValues, Path } from 'react-hook-form';

export type OtpInputProps<T extends FieldValues> = WithClassName & {
  name: Path<T>;
  control: Control<T>;
  length?: number;
  disabled?: boolean;
};

export type OtpCellProps = {
  isFilled: boolean;
  isActive: boolean;
  character: string;
  disabled?: boolean;
};
