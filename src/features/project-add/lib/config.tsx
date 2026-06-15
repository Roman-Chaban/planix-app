import type { ProjectDetailsSchema } from '@/features/project-add';
import type { FormFieldConfig } from '@/shared/ui/form-fields';

import {
  ClientIcon,
  PlatformIcon,
  PriceIcon,
  ProjectNameIcon,
} from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { TEXT } = INPUT_TYPES;

export const projectAddFields: readonly FormFieldConfig<ProjectDetailsSchema>[] =
  [
    {
      name: 'clientName',
      label: 'clientNameLabel',
      type: TEXT,
      placeholder: 'clientNamePlaceholder',
      startIcon: <ClientIcon width={20} height={20} />,
    },
    {
      name: 'projectName',
      label: 'projectNameLabel',
      type: TEXT,
      placeholder: 'projectNamePlaceholder',
      startIcon: <ProjectNameIcon />,
    },
    {
      name: 'platform',
      label: 'platformLabel',
      type: TEXT,
      placeholder: 'platformPlaceholder',
      startIcon: <PlatformIcon />,
    },
    {
      name: 'price',
      label: 'priceLabel',
      type: TEXT,
      placeholder: 'pricePlaceholder',
      startIcon: <PriceIcon />,
    },
  ];
