import { RegisterForm } from '@/features/auth/registration';
import { AuthLayout } from '@/shared/ui';

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
