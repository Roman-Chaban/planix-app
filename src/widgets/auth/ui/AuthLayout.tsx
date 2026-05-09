import styles from '@/widgets/auth/styles/auth.module.scss';
import { AuthLoginForm } from '@/features/auth/login/ui/AuthLoginForm';

import { Box, BrandBanner, Grid, GridItem } from '@/shared/ui/index';


export const AuthLayout = () => {
  return (
    <Box className={styles.layout}>
      <Grid className={styles.grid}>
        <GridItem span={7} className={styles.banner}>
          <BrandBanner />
        </GridItem>

        <GridItem span={5} className={styles.form}>
          <AuthLoginForm />
        </GridItem>
      </Grid>
    </Box>
  );
};
