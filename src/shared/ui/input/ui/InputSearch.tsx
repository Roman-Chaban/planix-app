import type { FC } from "react";

import { INPUT_TYPES } from "@/shared/constants/inputs";
import { SearchIcon } from "@/shared/ui/icons";
import type { InputProps } from "@/shared/ui/input/model/types";
import { InputRoot } from "@/shared/ui/input/ui/Input";


export const InputSearch: FC<InputProps> = ({ ...inputProps }) => {
  return (
    <InputRoot
      {...inputProps}
      type={INPUT_TYPES.SEARCH}
      startIcon={<SearchIcon />}
    />
  );
};
