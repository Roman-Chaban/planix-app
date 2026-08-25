import type {
  GroupBase,
  Props,
  StylesConfig,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
} from 'react-select';

import type { ReactNode } from 'react';

export type SelectVariant = 'default' | 'language' | 'toolbar' | 'platform';

export type SelectVariantStyles = {
  container?: CSSObjectWithLabel;
  control?: CSSObjectWithLabel;
  valueContainer?: CSSObjectWithLabel;
  singleValue?: CSSObjectWithLabel;
  dropdownIndicator?: CSSObjectWithLabel;
  indicatorSeparator?: CSSObjectWithLabel;
  indicatorsContainer?: CSSObjectWithLabel;
  placeholder?: CSSObjectWithLabel;
  menu?: CSSObjectWithLabel;
  option?: CSSObjectWithLabel;
  optionFocused?: CSSObjectWithLabel;
  optionSelected?: CSSObjectWithLabel;
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

export type CustomDropdownIndicatorProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = DropdownIndicatorProps<Option, IsMulti, Group> & {
  icon: ReactNode;
};
