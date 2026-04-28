import type { FC } from 'react';

import { Sidebar } from '@/widgets/sidebar/ui/Sidebar';

import { Grid, GridItem } from '@/shared/ui';

export const DashboardLayout: FC = () => {
  return (
    <Grid>
      <GridItem span={3}>
        <Sidebar />
      </GridItem>

      {/* Mock: [Waiting for implementation Dashboard Content] */}
      <GridItem span={9}>Content</GridItem>
    </Grid>
  );
};
