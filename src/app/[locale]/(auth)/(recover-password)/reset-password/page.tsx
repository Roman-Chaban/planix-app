import { ResetForm } from '@/features/auth/reset-password';
import { AuthLayout } from '@/shared/ui';

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <ResetForm />
    </AuthLayout>
  );
}
