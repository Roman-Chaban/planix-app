import { Suspense } from 'react';

import { Settings } from '@/widgets/settings';
import { PageLoader } from '@/shared/ui';

export default function SettingsPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Settings />
    </Suspense>
  );
}
