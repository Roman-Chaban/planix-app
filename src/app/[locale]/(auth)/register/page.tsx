import { RegisterForm } from '@/features/auth-by-registration';
import { AuthLayout } from '@/shared/ui';

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
