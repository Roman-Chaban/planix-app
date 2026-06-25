import { Suspense } from 'react';

import { ProfileLayout } from '@/widgets/profile';
import { Loader } from '@/shared/ui';

export default function ProfilePage() {
  return (
    <Suspense fallback={<Loader />}>
      <ProfileLayout />
    </Suspense>
  );
}
