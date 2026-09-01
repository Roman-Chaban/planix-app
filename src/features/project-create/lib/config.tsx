import type { ProjectCreateSchema } from '../model/schema';

import { FORM_FIELD_TYPES } from '@/shared/ui/form/form-field';
import type { FormFieldConfig } from '@/shared/ui/form/form-fields';

import { ClientIcon, PlatformIcon, PriceIcon, ProjectNameIcon } from '@/shared/ui/icons';

const { TEXT } = FORM_FIELD_TYPES;

export const projectCreateFields: readonly FormFieldConfig<ProjectCreateSchema>[] = [
  {
    kind: 'text',
    name: 'projectName',
    label: 'projectNameLabel',
    type: TEXT,
    placeholder: 'projectNamePlaceholder',
    startIcon: <ProjectNameIcon />,
  },
  {
    kind: 'text',
    name: 'clientName',
    label: 'clientNameLabel',
    type: TEXT,
    placeholder: 'clientNamePlaceholder',
    startIcon: <ClientIcon width={20} height={20} />,
  },
  {
    kind: 'date-range',
    name: 'startDate',
    label: 'dateRangeLabel',
    startField: 'startDate',
    endField: 'dueDate',
    startLabel: 'startDateLabel',
    endLabel: 'dueDateLabel',
    startPlaceholder: 'startDatePlaceholder',
    endPlaceholder: 'dueDatePlaceholder',
  },
  {
    kind: 'group',
    layout: 'row',
    fields: [
      {
        kind: 'text',
        name: 'price',
        label: 'priceLabel',
        type: TEXT,
        placeholder: 'pricePlaceholder',
        startIcon: <PriceIcon />,
      },
      {
        kind: 'text',
        name: 'platform',
        label: 'platformLabel',
        type: TEXT,
        placeholder: 'platformPlaceholder',
        startIcon: <PlatformIcon />,
      },
    ],
  },
  {
    kind: 'file-upload',
    name: 'files',
    label: 'label',
    placeholder: 'uploadLabel',
  },
  {
    kind: 'textarea',
    name: 'description',
    label: 'descriptionLabel',
    placeholder: 'descriptionPlaceholder',
  },
];
