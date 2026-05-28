export type ProjectDeleteModalProps = {
  projectId: string | null;
  isOpen: boolean;
  onClose: () => void;
};

export type UseDeleteProjectProps = {
  projectId: string | null;
  onClose: () => void;
};
