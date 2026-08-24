export type DeleteModalProps = {
  isOpen: boolean;
  reason: string;
  canDelete: boolean;
  isDeleting: boolean;
  error: string | null;
  onClose: () => void;
  onReasonChange: (reason: string) => void;
  onDelete: () => void;
};
