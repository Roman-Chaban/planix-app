import { InputRoot } from "@/shared/ui/input/ui/Input";
import { SearchIcon } from "@/shared/ui/icons";
import { INPUT_TYPES } from "@/shared/constants/constants";

import type { InputProps } from "@/shared/ui/input/model/input.types";
import type { FC } from "react";

export const InputSearch: FC<InputProps> = ({ ...inputProps }) => {
  return (
    <InputRoot
      {...inputProps}
      type={INPUT_TYPES.SEARCH}
      startIcon={<SearchIcon />}
    />
  );
};
