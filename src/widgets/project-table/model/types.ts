import type { Status, StatusColor } from '@/shared/ui/status-badge/model/types';

export type TableColumn = {
  key: keyof ProjectTableItem | 'actions';
  label: string;
};

export type ProjectTableHeaderProps = {
  columns: TableColumn[];
};

export type Client = {
  id: string;
  name: string;
  avatar: string;
};

export type Platform = 'Freelancer' | 'Upwork' | 'Fiverr';

export type Project = {
  id: string;
  client: Client;
  name: string;
  dueDate: string;
  platform: Platform;
  progress: number;
  price: number;
  status: Status;
  createdAt?: string;
  updatedAt?: string;
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

export type ProjectTableItem = {
  progressText: string;
  statusColor: StatusColor;
  formattedPrice: string;
} & Project;

export type ProjectRowProps = {
  project: ProjectTableItem;
  onTrashClick?: () => void;
};

export type ProjectsTableProps = {
  projects: ProjectTableItem[];
  onTrashClick: (id: string) => void;
};
