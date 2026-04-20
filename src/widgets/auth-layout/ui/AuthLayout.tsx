import type { FC } from "react";

import { LoginForm } from "@/features/auth/auth-login/ui/index";
import { Box } from "@/shared/ui/box/index";
import { BrandBanner } from "@/shared/ui/brand-banner/index";
import { Grid, GridItem } from "@/shared/ui/grid/index";


import styles from "./auth-layout.module.scss";

export const AuthLayout: FC = () => {
  return (
    <Box className={styles.wrapper}>
      <Grid className={styles.wrapperContainer}>
        <GridItem span={7}>
          <BrandBanner />
        </GridItem>

        <GridItem span={5}>
          <LoginForm />
        </GridItem>
      </Grid>
    </Box>
  );
};
