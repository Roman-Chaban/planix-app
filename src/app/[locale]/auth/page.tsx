import { Suspense } from 'react';

import { AuthStepper } from '@/features/auth/stepper/ui/AuthStepper';
import { AuthLayout, PageLoader } from '@/shared/ui';

export default function AuthPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <AuthLayout>
        <AuthStepper />
      </AuthLayout>
    </Suspense>
  );
}
