import type { SelectVariants } from '../model/select.types';

export const SELECT_VARIANTS: SelectVariants = {
  default: {
    container: {
      width: '100%',
    },

    control: {
      width: '100%',
      minHeight: '2.5rem',
      borderColor: '#b9b9b9',
      borderRadius: '1rem',
      marginBlockStart: '0.188rem',
      padding: '0.5rem 1.125rem',
    },

    valueContainer: {
      paddingInlineEnd: 0,
    },

    singleValue: {
      margin: 0,
      color: '#525252',
      cursor: 'pointer',
      overflow: 'visible',
    },

    dropdownIndicator: {
      cursor: 'pointer',
    },

    indicatorSeparator: {},

    menu: {},

    option: {
      cursor: 'pointer',
    },
  },

  language: {},

  toolbar: {},
};
