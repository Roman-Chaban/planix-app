import type { FC } from "react";

import { AuthLoginForm } from "@/features/auth/login/ui/AuthLoginForm";
import { Box, BrandBanner, Grid, GridItem } from "@/shared/ui/index";

import styles from "./auth-layout.module.scss";

export const AuthLayout: FC = () => {
  return (
    <Box className={styles.wrapper}>
      <Grid className={styles.wrapperContainer}>
        <GridItem span={7}>
          <BrandBanner />
        </GridItem>

        <GridItem span={5}>
          <AuthLoginForm />
        </GridItem>
      </Grid>
    </Box>
  );
};
