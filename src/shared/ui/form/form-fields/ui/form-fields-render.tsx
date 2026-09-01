import type { FormFieldSizes } from '../../form-field/model/constants';
import type { FormFieldConfig } from '../model/types';

import type { useFormContext, FieldValues } from 'react-hook-form';

import { buildClassName } from '@/shared/lib';
import { Box } from '@/shared/ui';

import styles from './form-fields.module.scss';
import { DateRangeField, DefaultField, FileUploadField, TextareaField } from './renderers';

export const formFieldsRender = <T extends FieldValues>(
  field: FormFieldConfig<T>,
  control: ReturnType<typeof useFormContext<T>>['control'],
  size: FormFieldSizes | undefined,
  t: (key: string) => string,
  index: number,
) => {
  switch (field.kind ?? 'text') {
    case 'date-range': {
      const dateRangeField = field as Extract<FormFieldConfig<T>, { kind: 'date-range' }>;

      return (
        <DateRangeField
          key={String(dateRangeField.name ?? `${dateRangeField.kind}-${index}`)}
          field={dateRangeField}
          control={control}
          size={size}
          t={t}
        />
      );
    }
    case 'textarea': {
      const textareaField = field as Extract<FormFieldConfig<T>, { kind: 'textarea' }>;

      return (
        <TextareaField
          key={String(textareaField.name ?? `${textareaField.kind}-${index}`)}
          field={textareaField}
          control={control}
          size={size}
          t={t}
        />
      );
    }
    case 'file-upload': {
      const fileUploadField = field as Extract<FormFieldConfig<T>, { kind: 'file-upload' }>;

      return (
        <FileUploadField
          key={String(fileUploadField.name ?? `${fileUploadField.kind}-${index}`)}
          field={fileUploadField}
          control={control}
          size={size}
          t={t}
        />
      );
    }
    case 'group': {
      const groupField = field as Extract<FormFieldConfig<T>, { kind: 'group' }>;

      return (
        <Box
          key={`group-${groupField.name ?? index}`}
          className={buildClassName(
            styles.group,
            groupField.layout === 'column' ? styles.column : styles.row,
            groupField.className,
          )}
        >
          {groupField.fields.map((nestedField, nestedIndex) =>
            formFieldsRender(nestedField, control, size, t, nestedIndex),
          )}
        </Box>
      );
    }
    default: {
      const defaultField = field as Extract<
        FormFieldConfig<T>,
        { kind?: 'text' | 'password' | 'date' }
      >;

      return (
        <DefaultField
          key={String(defaultField.name ?? `${defaultField.kind ?? 'text'}-${index}`)}
          field={defaultField}
          control={control}
          size={size}
          t={t}
        />
      );
    }
  }
};
