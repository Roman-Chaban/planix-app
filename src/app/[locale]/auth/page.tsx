import { AuthStepper } from '@/features/auth/stepper/ui/AuthStepper';
import { AuthLayout } from '@/shared/ui';

export default function AuthPage() {
  return (
    <AuthLayout>
      <AuthStepper />
    </AuthLayout>
  );
}
