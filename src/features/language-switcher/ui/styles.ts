import type { LanguageSelectStyles } from '@/features/change-language/model/types';

export const createSelectStyles = (): LanguageSelectStyles => ({
  container: (base) => ({
    ...base,
    width: '100%',
  }),

  control: (base) => ({
    ...base,
    width: '100%',
    minHeight: '2.5rem',
    borderColor: '#b9b9b9',
    borderRadius: '1rem',
    marginBlockStart: '0.188rem',
    padding: '0.5rem 1.125rem',
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
