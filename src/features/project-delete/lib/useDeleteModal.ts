import { useCallback, useState } from 'react';

export const useDeleteModal = () => {
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);

  const isOpen = projectToDelete !== null;

  const openDeleteModal = useCallback((id: string) => {
    setProjectToDelete(id);
  }, []);

  const closeDeleteModal = useCallback(() => {
    setProjectToDelete(null);
  }, []);

  return {
    projectToDelete,
    isOpen,
    openDeleteModal,
    closeDeleteModal,
  };
};
