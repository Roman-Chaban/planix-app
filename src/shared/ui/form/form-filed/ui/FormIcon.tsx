import { buildClassName } from '@/shared/lib';

import { Typography } from '@/shared/ui';

import { ICON_POSITION, type FormIconProps } from '@/shared/ui/form/form-filed';

import styles from './FormField.module.scss';

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
