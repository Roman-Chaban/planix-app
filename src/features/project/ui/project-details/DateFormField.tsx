'use client';

import type { DateFormFieldProps } from '@/features/project';

import { FormInputField } from '@/shared/ui';
import { CalendarIcon } from '@/shared/ui/icons';

import { INPUT_TYPES } from '@/shared/ui/input/model/constants';

import styles from './ProjectDetails.module.scss';

const { DATE } = INPUT_TYPES;

export const DateFormField = ({
  label,
  id,
  error,
  inputProps,
  valueDisplay,
  ...props
}: DateFormFieldProps & { valueDisplay?: string }) => {
  return (
    <FormInputField
      className={styles.dateInputClean}
      id={id}
      label={label}
      error={error}
      startIcon={<CalendarIcon width={20} height={20} />}
      inputProps={{
        ...inputProps,
        type: DATE,
        placeholder: '',
      }}
      {...(valueDisplay && { valueDisplay })}
      {...props}
    />
  );
};
