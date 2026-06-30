import type { FC } from 'react';

import styles from './Table.module.scss';

export const TableColGroup: FC<{ isShowReason: boolean }> = ({
  isShowReason,
}) => {
  return (
    <colgroup>
      <col className={styles.colClient} />
      <col className={styles.colName} />
      <col className={styles.colDueDate} />
      <col className={styles.colPlatform} />
      <col className={styles.colProgress} />
      <col className={styles.colPrice} />
      {isShowReason && <col className={styles.colReason} />}
      <col className={styles.colStatus} />
      <col className={styles.colActions} />
    </colgroup>
  );
};
