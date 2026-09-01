import type { FormFieldSizes } from '../../form-field/model/constants';
import type { DefaultFieldValue, FormFieldConfig } from '../model/types';

import type { useFormContext, FieldValues } from 'react-hook-form';

import { buildClassName } from '@/shared/lib';
import { Box } from '@/shared/ui';

import { FORM_FIELD_KINDS, FORM_FIELD_LAYOUTS } from '../model/constants';

import styles from './form-fields.module.scss';
import { DateRangeField, DefaultField, FileUploadField, TextareaField } from './renderers';

export const formFieldsRender = <T extends FieldValues>(
  field: FormFieldConfig<T>,
  control: ReturnType<typeof useFormContext<T>>['control'],
  size: FormFieldSizes | undefined,
  t: (key: string) => string,
  index: number,
) => {
  switch (field.kind ?? FORM_FIELD_KINDS.TEXT) {
    case FORM_FIELD_KINDS.DATE_RANGE: {
      const dateRangeField = field as Extract<
        FormFieldConfig<T>,
        { kind: typeof FORM_FIELD_KINDS.DATE_RANGE }
      >;

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
    case FORM_FIELD_KINDS.TEXTAREA: {
      const textareaField = field as Extract<
        FormFieldConfig<T>,
        { kind: typeof FORM_FIELD_KINDS.TEXTAREA }
      >;

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
    case FORM_FIELD_KINDS.FILE_UPLOAD: {
      const fileUploadField = field as Extract<
        FormFieldConfig<T>,
        { kind: typeof FORM_FIELD_KINDS.FILE_UPLOAD }
      >;

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
    case FORM_FIELD_KINDS.GROUP: {
      const groupField = field as Extract<
        FormFieldConfig<T>,
        { kind: typeof FORM_FIELD_KINDS.GROUP }
      >;

      return (
        <Box
          key={String(groupField.name ?? `${FORM_FIELD_KINDS.GROUP}-${index}`)}
          className={buildClassName(
            styles.group,
            groupField.layout === FORM_FIELD_LAYOUTS.COLUMN ? styles.column : styles.row,
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
      const defaultField = field as DefaultFieldValue<T>;

      return (
        <DefaultField
          key={String(
            defaultField.name ?? `${defaultField.kind ?? FORM_FIELD_KINDS.TEXT}-${index}`,
          )}
          field={defaultField}
          control={control}
          size={size}
          t={t}
        />
      );
    }
  }
};
