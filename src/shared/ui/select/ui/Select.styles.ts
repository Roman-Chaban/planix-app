import type { SelectStyles } from '../model/select.types';
import type { GroupBase } from 'react-select';

export const createSelectStyles = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(): SelectStyles<Option, IsMulti, Group> => ({
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
