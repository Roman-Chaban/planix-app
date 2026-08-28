import { Box } from '@/shared/ui';

import type { FormFieldSizes } from '@/shared/ui/form/form-field';

import styles from './create-form.module.scss';
import { DescriptionField } from './description-field';
import { DueDateField } from './due-date-field';
import { FilesField } from './files-field';
import { StartDateField } from './start-date-field';

type CreateFormFieldsProps = {
  fieldSize: FormFieldSizes;
};

export const CreateFormFields = ({ fieldSize }: CreateFormFieldsProps) => {
  return (
    <>
      <Box className={styles.row}>
        <StartDateField size={fieldSize} />
        <DueDateField size={fieldSize} />
      </Box>
      <Box className={styles.row}>
        <FilesField />
      </Box>
      <DescriptionField />
    </>
  );
};
