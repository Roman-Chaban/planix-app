"use client";

import { useForm } from "react-hook-form";

import type { AuthFormValues } from "@/features/auth/Login/model/types/types";

export const useAuthLogin = () => {
  const form = useForm<AuthFormValues>({
    defaultValues: {
      email: "",
      password: "",
      checked: false,
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(`Login Submit: ${data}`);
  });

  return {
    ...form,
    onSubmit,
  };
};
