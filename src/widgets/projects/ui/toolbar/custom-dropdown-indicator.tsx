'use client';

import type { DropdownIndicatorProps } from 'react-select';

import { CustomDropdownIndicator } from '@/shared/ui';
import { PlatformDropdownIcon } from '@/shared/ui/icons';

export const DropdownIndicator = <Option = unknown, IsMulti extends boolean = false>(
  props: DropdownIndicatorProps<Option, IsMulti>,
) => <CustomDropdownIndicator {...props} icon={<PlatformDropdownIcon />} />;
