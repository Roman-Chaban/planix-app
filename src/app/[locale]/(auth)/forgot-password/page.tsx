import { ForgotForm } from '@/features/auth/recover-password';
import { AuthLayout } from '@/shared/ui';

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <ForgotForm />
    </AuthLayout>
  );
}
