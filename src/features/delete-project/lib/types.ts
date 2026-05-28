export type ProjectDeleteModalProps = {
  projectId: string;
  isOpen: boolean;
  onClose: () => void;
};

export type UseDeleteProjectProps = {
  projectId: string;
  onClose: () => void;
};
