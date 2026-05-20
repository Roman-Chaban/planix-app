import { columns } from '@/shared/ui/skeletons/project-table/model/constants';

import styles from '@/shared/ui/skeletons/project-table/ui/ProjectTableSkeleton.module.scss';

export const ProjectsTableSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr className={styles.row}>
            {columns.map((col) => (
              <th key={col} className={`${styles.heading} ${styles[col]}`}>
                <div className={styles.skeleton} />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 14 }).map((_, i) => (
            <tr key={i} className={styles.bodyRow}>
              {columns.map((col) => (
                <td key={col} className={styles[col]}>
                  <div className={styles.skeleton} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
