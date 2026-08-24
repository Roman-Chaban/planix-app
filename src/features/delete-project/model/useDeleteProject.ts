import { useCallback, useState } from 'react';

import { useProjectActions } from '@/entities/project';

export const useDeleteProject = () => {
  const [projectToDelete, setProjectToDelete] = useState<string | number | null>(null);
  const [reason, setReason] = useState<string>('');
  const { deleteProject } = useProjectActions();

  const isOpen = projectToDelete !== null;
  const isDeleting = deleteProject.isPending;
  const canDelete = isOpen && reason.trim().length > 0 && !isDeleting;

  const openDeleteModal = useCallback(
    (id: string | number) => {
      setProjectToDelete(id);
      setReason('');
      deleteProject.reset();
    },
    [deleteProject],
  );

  const closeDeleteModal = useCallback(() => {
    setProjectToDelete(null);
    setReason('');
    deleteProject.reset();
  }, [deleteProject]);

  const handleDeleteProject = useCallback(() => {
    if (projectToDelete === null || !canDelete) return;

    deleteProject.mutate(
      { id: projectToDelete },
      {
        onSuccess: closeDeleteModal,
      },
    );
  }, [canDelete, closeDeleteModal, deleteProject, projectToDelete]);

  return {
    projectToDelete,
    isOpen,
    reason,
    canDelete,
    isDeleting,
    error: deleteProject.error?.message ?? null,
    openDeleteModal,
    closeDeleteModal,
    setReason,
    handleDeleteProject,
  };
};
