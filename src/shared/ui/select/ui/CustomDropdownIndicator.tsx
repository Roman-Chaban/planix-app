'use client';

import type { CustomDropdownIndicatorProps } from '../model/select.types';

import { components, type GroupBase } from 'react-select';

export const CustomDropdownIndicator = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  icon,
  ...props
}: CustomDropdownIndicatorProps<Option, IsMulti, Group>) => {
  return <components.DropdownIndicator {...props}>{icon}</components.DropdownIndicator>;
};
