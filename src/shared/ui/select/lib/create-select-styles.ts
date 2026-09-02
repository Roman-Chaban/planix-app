import type { SelectStyles } from '../model/types';

import { type GroupBase } from 'react-select';

import { SELECT_CONTROL_VARIANTS, type SelectControlVariants } from '../model/constants';

import { mergeStyles } from './merge-styles';
import { SELECT_VARIANTS } from './styles';

export const createSelectStyles = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  variant: SelectControlVariants = SELECT_CONTROL_VARIANTS.DEFAULT,
): SelectStyles<Option, IsMulti, Group> => {
  const styles = SELECT_VARIANTS.default;
  const variantStyles = SELECT_VARIANTS[variant];

  return {
    container: (base) => mergeStyles(base, styles.container, variantStyles.container),

    control: (base) => mergeStyles(base, styles.control, variantStyles.control),

    valueContainer: (base) =>
      mergeStyles(base, styles.valueContainer, variantStyles.valueContainer),

    singleValue: (base) => mergeStyles(base, styles.singleValue, variantStyles.singleValue),

    placeholder: (base) => mergeStyles(base, styles.placeholder, variantStyles.placeholder),

    dropdownIndicator: (base, state) => {
      const indicatorStyles = mergeStyles(
        base,
        styles.dropdownIndicator,
        variantStyles.dropdownIndicator,
      );

      return {
        ...indicatorStyles,

        '& svg': {
          ...(indicatorStyles['& svg'] as object),
          transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        },
      };
    },

    indicatorsContainer: () =>
      mergeStyles({}, styles.indicatorsContainer, variantStyles.indicatorsContainer),

    indicatorSeparator: (base) =>
      mergeStyles(base, styles.indicatorSeparator, variantStyles.indicatorSeparator),

    menu: (base) => mergeStyles(base, styles.menu, variantStyles.menu),

    option: (base, state) => {
      const optionStyles = mergeStyles(base, styles.option, variantStyles.option);

      if (state.isSelected) {
        return mergeStyles(optionStyles, styles.optionSelected, variantStyles.optionSelected);
      }

      if (state.isFocused) {
        return mergeStyles(optionStyles, styles.optionFocused, variantStyles.optionFocused);
      }

      return optionStyles;
    },
  };
};
