import { Suspense } from 'react';

import { SettingsLayout } from '@/widgets/settings';
import { Loader } from '@/shared/ui';

export default function SettingsPage() {
  return (
    <Suspense fallback={<Loader />}>
      <SettingsLayout />
    </Suspense>
  );
}
