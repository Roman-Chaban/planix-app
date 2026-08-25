import { useMutation } from '@tanstack/react-query';

import { changePassword } from '../api/changePassword';

export const useChangePasswordMutation = () =>
  useMutation({
    mutationFn: ({ oldPassword, newPassword }: { oldPassword: string; newPassword: string }) =>
      changePassword(oldPassword, newPassword),
  });
