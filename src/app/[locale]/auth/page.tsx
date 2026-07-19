import { Suspense } from 'react';

import { AuthStepper } from '@/features/auth/stepper/ui/AuthStepper';
import { AuthLayout, Loader } from '@/shared/ui';

export default function AuthPage() {
  return (
    <Suspense fallback={<Loader />}>
      <AuthLayout>
        <AuthStepper />
      </AuthLayout>
    </Suspense>
  );
}
