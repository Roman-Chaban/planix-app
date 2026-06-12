import { LoginForm } from '@/features/auth/login/ui/form/LoginForm';

import { AuthLayout } from '@/shared/ui';

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
