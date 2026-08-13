import type { GroupBase, Props, StylesConfig, CSSObjectWithLabel } from 'react-select';

export type SelectVariant = 'default' | 'language' | 'toolbar';

export type SelectVariantStyles = {
  container?: CSSObjectWithLabel;
  control?: CSSObjectWithLabel;
  valueContainer?: CSSObjectWithLabel;
  singleValue?: CSSObjectWithLabel;
  dropdownIndicator?: CSSObjectWithLabel;
  indicatorSeparator?: CSSObjectWithLabel;
  menu?: CSSObjectWithLabel;
  option?: CSSObjectWithLabel;
};

export type SelectVariants = Record<SelectVariant, SelectVariantStyles>;

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
