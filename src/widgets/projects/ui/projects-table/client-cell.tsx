import type { TableItem } from './model/types';

import { Avatar, Box } from '@/shared/ui';

import styles from './projects-table.module.scss';

export const ClientCell = ({ client_name, client_avatar }: TableItem) => {
  return (
    <Box className={styles.clientCell}>
      <Avatar src={client_avatar} width={28} height={28} alt={client_name} />
      {client_name}
    </Box>
  );
};
