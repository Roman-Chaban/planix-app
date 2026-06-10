import { LoginForm } from '@/features/auth-by-credentials/ui/LoginForm';

import { AuthLayout } from '@/shared/ui';

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
