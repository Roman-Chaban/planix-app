"use client";

import type { FC } from "react";

import { useAuthLogin } from "@/features/auth/login/model/hooks/useAuthLogin";
import { AuthLoginFormView } from "@/features/auth/login/ui/AuthLoginForm.view";

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

AuthLoginForm.displayName = "AuthLoginForm";
