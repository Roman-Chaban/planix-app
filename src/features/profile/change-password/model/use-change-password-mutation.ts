import { useMutation } from '@tanstack/react-query';

import { changePassword } from '../api/change-password';

export const useChangePasswordMutation = () =>
  useMutation({
    mutationFn: ({ oldPassword, newPassword }: { oldPassword: string; newPassword: string }) =>
      changePassword(oldPassword, newPassword),
  });
