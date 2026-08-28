import type { ProjectDetailsSchema } from '@/features/project-create';
import { FORM_FIELD_TYPES } from '@/shared/ui/form/form-field';
import type { FormFieldConfig } from '@/shared/ui/form/form-fields';

import { ClientIcon, PlatformIcon, PriceIcon, ProjectNameIcon } from '@/shared/ui/icons';

const { TEXT } = FORM_FIELD_TYPES;

export const projectAddFields: readonly FormFieldConfig<ProjectDetailsSchema>[] = [
  {
    name: 'projectName',
    label: 'projectNameLabel',
    type: TEXT,
    placeholder: 'projectNamePlaceholder',
    startIcon: <ProjectNameIcon />,
  },
  {
    name: 'clientName',
    label: 'clientNameLabel',
    type: TEXT,
    placeholder: 'clientNamePlaceholder',
    startIcon: <ClientIcon width={20} height={20} />,
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
