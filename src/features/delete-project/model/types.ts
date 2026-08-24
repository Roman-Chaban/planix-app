export type DeleteModalActionsProps = {
  reason: string;
  canDelete: boolean;
  isDeleting: boolean;
  error: string | null;
  onReasonChange: (reason: string) => void;
  onDelete: () => void;
  onClose: () => void;
};

export type DeleteModalProps = DeleteModalActionsProps & {
  isOpen: boolean;
};
