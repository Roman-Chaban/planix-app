import { Suspense } from 'react';

import { SettingsLayout } from '@/widgets/settings';
import { PageLoader } from '@/shared/ui';

export default function SettingsPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <SettingsLayout />
    </Suspense>
  );
}
