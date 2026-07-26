import type { OtpCellProps } from '../model/otp-input.types';

import { buildClassName } from '@/shared/lib';

import { Box } from '../../box';

import { OtpCursor } from './OtpCursor';
import styles from './OtpInput.module.scss';

export const OtpCell = ({ isActive, isFilled, disabled, character }: OtpCellProps) => {
  return (
    <Box
      className={buildClassName(
        styles.cell,
        isActive && styles.activeCell,
        isFilled && styles.filledCell,
        disabled && styles.disabledCell,
      )}
    >
      {character ? character : isActive && <OtpCursor />}
    </Box>
  );
};
