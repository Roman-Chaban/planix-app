"use client";

import type { FC } from "react";

import { Avatar, Box, Typography } from "@/shared/ui/index";
import { PlanixLogo } from "@/shared/ui/icons/Icons";

import styles from "./styles.module.scss";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { BREAKPOINTS } from "@/shared/constants/breakpoints";

export const BrandBanner: FC = () => {
  const isMobileLarge = useMediaQuery(BREAKPOINTS.MOBILE_LARGE);

  const ICON_RESPONSIVE = isMobileLarge ? (
    <PlanixLogo width={60} height={60} />
  ) : (
    <PlanixLogo />
  );

  return (
    <Box className={styles.banner}>
      <Box className={styles.logoContainer}>
        <Avatar alt="Palnix Logo" icon={ICON_RESPONSIVE} />

        <Typography as="span" className={styles.logoCapture}>
          Planix
        </Typography>
      </Box>
      <Typography as="h5" className={styles.logoHeading}>
        Empowering You to Plan, Track, and Deliver with Clarity
      </Typography>
    </Box>
  );
};
