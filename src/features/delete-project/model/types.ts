export type DeleteModalActionsProps = {
  reason: string;
  canDelete: boolean;
  isDeleting: boolean;
  error: string | null;
  onClose: () => void;
  onReasonChange: (reason: string) => void;
  onDelete: () => void;
};

export type DeleteModalProps = DeleteModalActionsProps & {
  isOpen: boolean;
};
