import type { TFunction } from 'i18next';

import type { Project } from '@/widgets/project-table/model/types';
import { toDisplay } from '@/features/project-add/ui/project-add-fields';

type ProjectDetailsMapOptions = {
  project: Project;
  t: TFunction;
};

export const mapProjectDetails = ({ project, t }: ProjectDetailsMapOptions) => [
  {
    id: 'name',
    label: t('fields.projectName'),
    value: project.name,
  },
  {
    id: 'client',
    label: t('fields.clientName'),
    value: project.client.name,
  },
  {
    id: 'createdAt',
    label: t('fields.startDate'),
    value: toDisplay(project.created_at ?? ''),
  },
  {
    id: 'dueDate',
    label: t('fields.dueDate'),
    value: toDisplay(project.dueDate ?? ''),
  },
  {
    id: 'price',
    label: t('fields.price'),
    value: `$${project.price}`,
  },
  {
    id: 'platform',
    label: t('fields.platform'),
    value: project.platform,
  },
  {
    id: 'progress',
    label: t('fields.progress'),
    value: `${project.progress}%`,
  },
];
