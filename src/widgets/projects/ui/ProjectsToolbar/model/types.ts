import type { Control } from 'react-hook-form';

type ProjectsFilterForm = {
  search: string;
};

export type ProjectsTollbarProps = {
  control: Control<ProjectsFilterForm>;
};
