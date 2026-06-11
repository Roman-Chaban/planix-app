import { SignUpForm } from '@/features/auth-by-registration';
import { AuthLayout } from '@/shared/ui';

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}
