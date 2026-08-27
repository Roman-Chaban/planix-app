import { Box } from '@/shared/ui';

import type { FormFieldSize } from '@/shared/ui/input/lib/constants';

import styles from './create-form.module.scss';
import { DescriptionField } from './description-field';
import { DueDateField } from './due-date-field';
import { FilesField } from './files-field';
import { StartDateField } from './start-date-field';

type CreateFormFieldsProps = {
  fieldSize: FormFieldSize;
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
