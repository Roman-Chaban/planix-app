import type { FC, SVGProps } from 'react';

export type ProjectsLayoutFormValues = {
  search: string;
};

export type ProjectStatus = 'Pending' | 'In Progress' | 'Completed' | 'Canceled';
export type Platform = 'Freelancer' | 'Upwork' | 'Fiverr';
type SortBy = 'dueDate' | 'price' | 'progress' | 'createdAt';
type Order = 'asc' | 'desc';
export type StatusColor = ProjectStatus;

export type Client = {
  id: string;
  name: string;
  avatar: string;
};

export type Project = {
  id: string;
  client: Client;
  name: string;
  dueDate: string;
  platform: Platform;
  progress: number;
  price: number;
  status: ProjectStatus;
  createdAt?: string;
  updatedAt?: string;
};

export type ProjectTableItem = {
  progressText: string;
  statusColor: StatusColor;
  formattedPrice: string;
} & Project;

export type StatusClasses = Record<ProjectStatus, string>;
export type StatusIcons = Record<ProjectStatus, FC<SVGProps<SVGSVGElement>>>;

export type GetProjectsParams = {
  page?: number;
  limit?: number;
  status?: ProjectStatus;
  platform?: Platform;
  search?: string;
  sortBy?: SortBy;
  order?: Order;
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
