type ProjectContextProps = {
  projectId?: string | null;
  onClose?: () => void;
};

export type DeleteProjectModalProps = {
  isOpen: boolean;
} & ProjectContextProps;

export type UseDeleteProjectOptions = ProjectContextProps;

export type DeleteProjectActionsProps = {
  onDelete?: () => void;
} & ProjectContextProps;
