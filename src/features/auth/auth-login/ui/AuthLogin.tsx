"use client";

import type { FC } from "react";

import { useForm } from "react-hook-form";

import { AuthFooter } from "@/features/auth/auth-footer/ui/AuthFooter";
import { AuthHeader } from "@/features/auth/auth-header/ui/AuthHeader";
import { Box } from "@/shared/ui/box";
import { LockIcon, PostIcon, VisibleIcon } from "@/shared/ui/icons";
import { Input } from "@/shared/ui/input/Input";

import styles from "./auth-login.module.scss";

export const AuthLoginForm: FC = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      passoword: "",
    },
  });

  return (
    <Box className={styles.loginWrapper}>
      <AuthHeader title="Log In" subtitle="Log In to Your CRM Dashboard" />
      <form className={styles.loginForm}>
        <Input
          startIcon={<PostIcon />}
          {...form.register("email")}
          placeholder="Enter Email Address"
          label="Email Address"
          variant="primary"
        />
        <Input
          startIcon={<LockIcon />}
          endIcon={<VisibleIcon />}
          {...form.register("passoword")}
          placeholder="Enter Password"
          label="Password"
          variant="primary"
        />
      </form>
      <AuthFooter title="Don't have account yet?" link="Registration" />
    </Box>
  );
};
