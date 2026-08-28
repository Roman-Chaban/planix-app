import type { WithChildren, WithClassName } from '@types';

import { buildClassName } from '@/shared/lib';

import { Box } from '../../box';

import styles from './button.module.scss';

type ButtonIconProps = WithChildren & WithClassName;

export const ButtonIcon = ({ children, className }: ButtonIconProps) => {
  return <Box className={buildClassName(styles.icon, className)}>{children}</Box>;
};
