import { useState } from 'react';

import type { UseDeleteProjectOptions } from '@/features/project-delete';
import { useProjectActions } from '@/entities/project';

export const useDeleteProject = ({ projectId, onClose }: UseDeleteProjectOptions) => {
  const [reason, setReason] = useState('');

  const { deleteProject, isProjectActionPending } = useProjectActions();

  const isDeleted = reason.trim().length > 0 && !isProjectActionPending;

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
    isDeleted,
    setReason,
    handleDeleteProject,
    handleClose,
    isProjectActionPending,
  };
};
