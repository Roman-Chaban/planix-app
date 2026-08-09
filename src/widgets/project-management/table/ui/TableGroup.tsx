import styles from './Table.module.scss';

export const TableColGroup = ({}) => {
  return (
    <colgroup>
      <col className={styles.colClient} />
      <col className={styles.colName} />
      <col className={styles.colDueDate} />
      <col className={styles.colPlatform} />
      <col className={styles.colProgress} />
      <col className={styles.colPrice} />
      <col className={styles.colStatus} />
      <col className={styles.colActions} />
    </colgroup>
  );
};
