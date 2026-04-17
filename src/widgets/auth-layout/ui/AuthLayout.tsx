import type { FC } from "react";
import { Grid, GridItem } from "@/shared/ui/grid/index";

import { Avatar } from "@/shared/ui/avatar";
import { PlanixLogo } from "@/shared/ui/icons/Icons";
import { Box } from "@/shared/ui/box/index";
import { Typography } from "@/shared/ui/typography/Typography";

import styles from "./auth-layout.module.scss";

export const AuthLayout: FC = () => {
  return (
    <Box className={styles.wrapper}>
      <Grid>
        <GridItem span={6}>
          <Box className={styles.banner}>
            <Box className={styles.logoContainer}>
              <Avatar
                alt="Palnix Logo"
                icon={<PlanixLogo width={78} height={78} />}
              />

              <Typography as="span" className={styles.logoCapture}>
                Planix
              </Typography>
            </Box>
            <Typography as="h5" className={styles.logoHeading}>
              Empowering You to Plan, Track, and Deliver with Clarity
            </Typography>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
