import { LoginForm } from '@/features/auth/login/ui/LoginForm';

import { AuthLayout } from '@/shared/ui';

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
