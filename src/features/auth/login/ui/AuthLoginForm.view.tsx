import type { FC } from "react";

import { Controller } from "react-hook-form";

import type { AuthLoginFormViewProps } from "@/features/auth/login/model/types/form.types";
import { BUTTON_TYPES, INPUT_TYPES } from "@/shared/constants/constants";
import { Box, Button, Checkbox, AppLink } from "@/shared/ui/index";
import { LockIcon, PostIcon } from "@/shared/ui/icons";
import { Input } from "@/shared/ui/input/lib/index";
import { AuthFooter } from "@/widgets/auth-layout/ui/AuthFooter";
import { AuthHeader } from "@/widgets/auth-layout/ui/AuthHeader";

import styles from "./auth-login.form.module.scss";

export const AuthLoginFormView: FC<AuthLoginFormViewProps> = ({
  register,
  control,
  onSubmit,
}) => {
  return (
    <Box className={styles.loginWrapper}>
      <Box className={styles.loginContent}>
        <AuthHeader
          title="Log "
          subtitle="Log In to Your CRM Dashboard"
          decorationText="In 👋"
        />

        <form className={styles.loginForm} onSubmit={onSubmit}>
          <Input
            startIcon={<PostIcon />}
            {...register("email")}
            type={INPUT_TYPES.EMAIL}
            placeholder="Enter Email Address"
            label="Email Address"
            variant="primary"
            autoComplete="email"
          />

          <Input.Password
            startIcon={<LockIcon />}
            {...register("password")}
            placeholder="Enter Password"
            label="Password"
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

              {/* Mock: [Added the correct link when it will need] */}
              <AppLink href="/#" className={styles.loginFormLink}>
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
