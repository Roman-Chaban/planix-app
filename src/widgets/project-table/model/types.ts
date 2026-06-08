import type { Project, ProjectFile, RejectReason, Status } from '@/entities/project/model/types';
import type { ActionItem } from '@/shared/ui/actions-bar/model/types';
import type { StatusColor } from '@/shared/ui/status-badge/model/types';

export type TableColumn = {
  key: keyof ProjectTableItem | 'actions';
  label: string;
};

export type ProjectTableHeaderProps = {
  columns: TableColumn[];
};

export type ProjectsResponse = {
  data: Project[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type ProjectDBRow = {
  id: string | number;
  project_name: string;
  client_id: string;
  client_name: string;
  client_avatar: string;
  start_date: string;
  due_date: string;
  platform: string;
  progress: number;
  price: number;
  status: Status;
  reason: RejectReason;
  slug: string;
  description: string;
  description_uk: string;
  name_uk: string;
  files: ProjectFile[];
};

export type ProjectTableItem = {
  progressText: string;
  statusColor: StatusColor;
  formattedPrice: string;
  formattedDueDate: string;
  reason: RejectReason;
} & Project;

export type ProjectTableRowProps = {
  project: ProjectTableItem;
  actionsFactory: (name: string, id: string | number) => ActionItem[];
  isShowReason?: boolean;
};

export type ProjectsTableProps = {
  projects: ProjectTableItem[];
  onDelete: (id: string | number) => void;
  isShowReason?: boolean;
};
