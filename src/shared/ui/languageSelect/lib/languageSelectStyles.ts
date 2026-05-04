import type { LanguageSelectStyles } from '@/shared/ui/languageSelect/model/types';

export const createSelectStyles = (isTablet: boolean): LanguageSelectStyles => ({
  /* Container */

  container: (base) => ({
    ...base,
    width: '10rem',
    display: isTablet ? 'none' : 'flex',
  }),

  /* Control */

  control: (base) => ({
    ...base,
    width: '10rem',
    minHeight: '2.5rem',
  }),

  /* Value Container */

  valueContainer: (base) => ({
    ...base,
    paddingInlineEnd: 0,
  }),

  /* Values */

  singleValue: (base) => ({
    ...base,
    margin: 0,
    color: '#525252',
    cursor: 'pointer',
  }),

  /* Indicators */

  dropdownIndicator: (base) => ({
    ...base,
    cursor: 'pointer',
  }),

  indicatorSeparator: () => ({}),

  /* Menu */

  menu: (base) => ({
    ...base,
  }),

  /* Option */

  option: (base) => ({
    ...base,
    cursor: 'pointer',
  }),
});
