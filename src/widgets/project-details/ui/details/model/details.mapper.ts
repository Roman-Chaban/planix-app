import type { ProjectDetailsMapOptions } from '@/widgets/project-details/ui/details';
import { toDisplay } from '@/features/project-add/ui/project-add-fields';
import { APP_LOCALES } from '@/shared/lib/i18n/locales';

export const mapProjectDetails = ({
  project,
  t,
  lng,
}: ProjectDetailsMapOptions) => {
  const isUk = lng === APP_LOCALES.UK;

  const name = isUk
    ? project.project_name_uk || project.project_name
    : project.project_name;
  const description = isUk
    ? project.description_uk || project.description
    : project.description;

  const details = [
    { id: 'name', label: t('fields.projectName'), value: name },
    { id: 'client', label: t('fields.clientName'), value: project.client_name },
    {
      id: 'createdAt',
      label: t('fields.startDate'),
      value: toDisplay(project.start_date ?? ''),
    },
    {
      id: 'dueDate',
      label: t('fields.dueDate'),
      value: toDisplay(project.due_date ?? ''),
    },
    {
      id: 'price',
      label: t('fields.price'),
      value: `$${project.price.toLocaleString()}`,
    },
    { id: 'platform', label: t('fields.platform'), value: project.platform },
    {
      id: 'progress',
      label: t('fields.progress'),
      value: `${project.progress}% ${t('fields.complete')}`,
    },
  ];

  return { details, description };
};
