import { Suspense } from 'react';

import { AuthStepper } from '@/features/auth/stepper/ui/auth-stepper';
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
