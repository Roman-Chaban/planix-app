import { InputRoot } from "@/shared/ui/input/ui/Input";
import { INPUT_TYPES } from "@/shared/constants/constants";
import { VisibleIcon, HiddenIcon } from "@/shared/ui/icons";

import type { InputProps } from "@/shared/ui/input/model/input.types";
import { usePasswordToggle } from "@/shared/ui/input/hooks/usePasswordToggle";
import type { FC } from "react";

export const InputPassword: FC<InputProps> = ({ ...inputProps }) => {
  const { visible, toggle } = usePasswordToggle();

  return (
    <InputRoot
      {...inputProps}
      type={visible ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD}
      endIcon={visible ? <HiddenIcon /> : <VisibleIcon />}
      onEndIconClick={toggle}
    />
  );
};
