import type { ProjectsTollbarProps } from '../model/types';

import type { FC } from 'react';
import { Controller } from 'react-hook-form';

import { INPUT_VARIANTS } from '@/shared/constants/inputs';
import { Input } from '@/shared/ui/input/lib';

const { PRIMARY } = INPUT_VARIANTS;

export const ProjectToolbar: FC<ProjectsTollbarProps> = ({ control }) => {
  return (
    <Controller
      name="search"
      control={control}
      render={({ field }) => (
        <Input.Search
          variant={PRIMARY}
          inputSize="md"
          {...field}
          placeholder="Search"
          autoComplete="search"
        />
      )}
    />
  );
};
