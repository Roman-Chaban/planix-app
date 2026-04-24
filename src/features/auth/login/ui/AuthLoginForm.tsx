"use client";

import type { FC } from "react";

import { useAuthLogin } from "@/features/auth/login/model/hooks/useAuthLogin";
import { AuthLoginFormView } from "@/features/auth/login/ui/AuthLoginFormView";

export const AuthLoginForm: FC = () => {
  const { register, onSubmit, control } = useAuthLogin();

  return (
    <AuthLoginFormView
      register={register}
      onSubmit={onSubmit}
      control={control}
    />
  );
};
