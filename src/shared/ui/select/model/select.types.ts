import type { GroupBase, Props, StylesConfig } from 'react-select';

export type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Props<Option, IsMulti, Group>;

export type SelectStyles<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = StylesConfig<Option, IsMulti, Group>;
