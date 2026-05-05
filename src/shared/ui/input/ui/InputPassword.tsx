import type { FC } from 'react';

import { INPUT_TYPES } from '@/shared/constants/inputs';
import { EyeIcon, EyeOffIcon } from '@/shared/ui/icons';
import { usePasswordToggle } from '@/shared/ui/input/hooks/usePasswordToggle';
import type { InputProps } from '@/shared/ui/input/model/types';
import { InputRoot } from '@/shared/ui/input/ui/Input';

export const InputPassword: FC<InputProps> = ({ ...inputProps }) => {
  const { isVisible, toggle } = usePasswordToggle();

  return (
    <InputRoot
      {...inputProps}
      type={isVisible ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD}
      endIcon={isVisible ? <EyeOffIcon /> : <EyeIcon />}
      onEndIconClick={toggle}
    />
  );
};
