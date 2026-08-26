'use client';

import { Header } from '@/widgets/header';
import { CreateForm } from '@/features/project-create';
import { NAMESPACE as NS } from '@/shared/i18n';
import { usePageTitles } from '@/shared/lib/hooks';
import { PageWrapper, ProjectHeader } from '@/shared/ui';

export const ProjectCreate = () => {
  const { pageTitle } = usePageTitles();

  return (
    <PageWrapper header={<Header title={pageTitle} />}>
      <ProjectHeader
        showStatus
        translationNamespace={NS.PROJECT_CREATE}
        title={'header.title'}
        metaInfo={{ label: 'header.label', value: 'header.value' }}
      />

      <CreateForm />
    </PageWrapper>
  );
};
