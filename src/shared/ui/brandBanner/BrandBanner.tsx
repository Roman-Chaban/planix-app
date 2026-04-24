"use client";

import type { FC } from "react";

import { BREAKPOINTS } from "@/shared/constants/breakpoints";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { PlanixLogoIcon } from "@/shared/ui/icons/Icons";
import { Avatar, Box, Typography } from "@/shared/ui/index";

import styles from "./styles.module.scss";


export const BrandBanner: FC = () => {
  const isMobileLarge = useMediaQuery(BREAKPOINTS.MOBILE_LARGE);

  const ICON_RESPONSIVE = isMobileLarge ? (
    <PlanixLogoIcon width={60} height={60} />
  ) : (
    <PlanixLogoIcon />
  );

  return (
    <Box className={styles.banner}>
      <Box className={styles.header}>
        <Avatar alt="Palnix Logo" icon={ICON_RESPONSIVE} />

        <Typography as="span" className={styles.title}>
          Planix
        </Typography>
      </Box>
      <Typography as="h5" className={styles.subtitle}>
        Empowering You to Plan, Track, and Deliver with Clarity
      </Typography>
    </Box>
  );
};
