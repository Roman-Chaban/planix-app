import type { FC } from "react";

import { Controller } from "react-hook-form";

import type { AuthLoginFormViewProps } from "@/features/auth/login/model/types/form.types";
import { BUTTON_TYPES } from "@/shared/constants/constants";
import { Box } from "@/shared/ui/box";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox/Checkbox";
import { LockIcon, PostIcon, VisibleIcon } from "@/shared/ui/icons";
import { Input } from "@/shared/ui/input/Input";
import { AppLink } from "@/shared/ui/link/AppLink";
import { AuthFooter } from "@/widgets/auth-layout/ui/AuthFooter";
import { AuthHeader } from "@/widgets/auth-layout/ui/AuthHeader";

import styles from "./auth-login-form.module.scss";

export const AuthLoginFormView: FC<AuthLoginFormViewProps> = ({
  register,
  control,
  onSubmit,
}) => {
  return (
    <Box className={styles.loginWrapper}>
      <Box className={styles.loginContent}>
        <AuthHeader title="Log In" subtitle="Log In to Your CRM Dashboard" />

        <form className={styles.loginForm} onSubmit={onSubmit}>
          <Input
            startIcon={<PostIcon />}
            {...register("email")}
            placeholder="Enter Email Address"
            label="Email Address"
            variant="primary"
            autoComplete="email"
          />

          <Input
            startIcon={<LockIcon />}
            endIcon={<VisibleIcon />}
            {...register("password")}
            placeholder="Enter Password"
            label="Password"
            variant="primary"
            autoComplete="current-password"
          />

          <Box className={styles.loginFormMainWrapper}>
            <Box className={styles.loginFormMain}>
              <Controller
                name="checked"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onChange={field.onChange}
                    label="Remember me"
                  />
                )}
              />

              <AppLink href="" className={styles.loginFormLink}>
                Forgot Password?
              </AppLink>
            </Box>

            <Button type={BUTTON_TYPES.SUBMIT} variant="primary" size="md">
              Log in
            </Button>
          </Box>
        </form>
      </Box>

      <AuthFooter title="Don't have account yet?" link="Registration" />
    </Box>
  );
};
