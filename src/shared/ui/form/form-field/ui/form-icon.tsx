import { buildClassName } from '@/shared/lib';

import { Typography } from '@/shared/ui';

import { ICON_POSITION } from '../model/constants';
import { type FormIconProps } from '../model/types';

import styles from './form-field.module.scss';

const { START } = ICON_POSITION;

export const FormIcon = ({
  children,
  position = START,
  onClick,
  error,
  className,
  ...iconProps
}: FormIconProps) => {
  const positionClassname = position === START ? styles.slotStart : styles.slotEnd;

  const isClickable = Boolean(onClick);

  const rootClassnames = buildClassName(
    positionClassname,
    { [styles.clickable]: isClickable },
    { [styles.errorIcon]: !!error },
    className,
  );

  return (
    <Typography as="div" className={rootClassnames} onClick={onClick} {...iconProps}>
      {children}
    </Typography>
  );
};
