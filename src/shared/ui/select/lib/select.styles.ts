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
      padding: 0,
      cursor: 'pointer',

      '& svg': {
        transition: 'transform 0.2s ease',
      },
    },

    indicatorSeparator: {},

    menu: {},

    option: {
      cursor: 'pointer',
    },
  },

  language: {},

  platform: {
    container: {
      maxWidth: '11.563rem',
    },

    control: {
      borderColor: '#e3e3e3',
      boxShadow: '0 2px 16px 0 rgba(19, 20, 21, 0.1)',
      padding: '0.438rem',
      paddingInlineEnd: '1.125rem',
      minHeight: '3.375rem',
    },

    placeholder: {
      color: '#525252',
      lineHeight: '150%',
      margin: 0,
    },
  },

  toolbar: {
    container: {
      zIndex: 4,
    },

    control: {
      minHeight: '3.6rem',
    },

    valueContainer: {},

    singleValue: {
      fontWeight: 500,
      color: '#6a6a6a',
    },

    dropdownIndicator: {
      color: '#848484',

      '& svg': {
        transition: 'transform 0.2s ease',
      },
    },

    indicatorSeparator: {},

    indicatorsContainer: {},

    menu: {},

    option: {
      color: '#1e305a',
    },

    optionSelected: {
      color: '#ffffff',
      background: '#4165b7',
    },
  },
};
