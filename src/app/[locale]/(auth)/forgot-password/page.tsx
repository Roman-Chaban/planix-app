import { ForgotForm } from '@/features/auth-by-forgot-password';
import { AuthLayout } from '@/shared/ui';

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <ForgotForm  />
    </AuthLayout>
  );
}
