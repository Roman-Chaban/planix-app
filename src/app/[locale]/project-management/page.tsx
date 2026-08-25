import { Suspense } from 'react';

import { ProjectManagement } from '@/widgets/projects';
import { PageLoader } from '@/shared/ui';

export default function ProjectManagementPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ProjectManagement />
    </Suspense>
  );
}
