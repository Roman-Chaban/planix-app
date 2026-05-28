import { useState } from 'react';

import type { UseDeleteProjectProps } from '@/features/delete-project';
import { useProjectActions } from '@/entities/project';

export const useDeleteProject = ({ projectId, onClose }: UseDeleteProjectProps) => {
  const [reason, setReason] = useState('');

  const { deleteProject, isProjectActionPending } = useProjectActions();

  const resetState = () => {
    setReason('');
  };

  const handleDeleteProject = () => {
    if (!projectId) return;

    deleteProject.mutate(
      {
        id: projectId,
      },
      {
        onSuccess: () => {
          resetState();
          onClose();
        },
      },
    );
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  return {
    reason,
    setReason,
    handleDeleteProject,
    handleClose,
    isProjectActionPending,
  };
};
