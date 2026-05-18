import type { LanguageSelectStyles } from '@/features/change-language/ChangeLanguage.types';

export const createSelectStyles = (isTablet: boolean): LanguageSelectStyles => ({
  container: (base) => ({
    ...base,
    width: '10rem',
    display: isTablet ? 'none' : 'flex',
  }),

  control: (base) => ({
    ...base,
    width: '10rem',
    minHeight: '2.5rem',
  }),

  valueContainer: (base) => ({
    ...base,
    paddingInlineEnd: 0,
  }),

  singleValue: (base) => ({
    ...base,
    margin: 0,
    color: '#525252',
    cursor: 'pointer',
  }),

  dropdownIndicator: (base) => ({
    ...base,
    cursor: 'pointer',
  }),

  indicatorSeparator: () => ({}),

  menu: (base) => ({
    ...base,
  }),

  option: (base) => ({
    ...base,
    cursor: 'pointer',
  }),
});
