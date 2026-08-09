'use client';

import type { SelectProps } from '../model/select.types';

import ReactSelect, { type GroupBase } from 'react-select';

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  selectProps: SelectProps<Option, IsMulti, Group>,
) => {
  return <ReactSelect<Option, IsMulti, Group> {...selectProps} />;
};
