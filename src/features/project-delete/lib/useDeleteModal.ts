import { useCallback, useState } from 'react';

export const useDeleteModal = () => {
  const [projectToDelete, setProjectToDelete] = useState<
    string | number | null
  >(null);

  const isOpen = projectToDelete !== null;

  const openDeleteModal = useCallback((id: string | number) => {
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
