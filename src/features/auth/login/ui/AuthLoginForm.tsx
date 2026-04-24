"use client";

import type { FC } from "react";

import { useAuthLogin } from "@/features/auth/Login/model/hooks/useAuthLogin";
import { AuthLoginFormView } from "@/features/auth/Login/ui/AuthLoginFormView";

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
