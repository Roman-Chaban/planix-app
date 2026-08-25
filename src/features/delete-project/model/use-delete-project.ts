import { useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { closeModal, ModalId, openModal, selectIsModalOpen } from '@/entities/modal';
import { useProjectActions } from '@/entities/project';
import { showToast } from '@/entities/toast';
import { NAMESPACE } from '@/shared/i18n';
import { useAppDispatch, useAppSelector } from '@/shared/providers/store/hooks';

import { TOAST_VARIANT } from '@/shared/ui/toast';

const { SUCCESS, ERROR } = TOAST_VARIANT;

export const useDeleteProject = () => {
  const { t } = useTranslation(NAMESPACE.DELETE_MODAL);

  const [projectToDelete, setProjectToDelete] = useState<string | number | null>(null);
  const [reason, setReason] = useState<string>('');
  const { deleteProject } = useProjectActions();

  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectIsModalOpen(ModalId.DELETE_MODAL));

  const isDeleting = deleteProject.isPending;
  const canDelete = isOpen && reason.trim().length > 0 && !isDeleting;

  const openDeleteModal = useCallback(
    (id: string | number) => {
      dispatch(openModal(ModalId.DELETE_MODAL));
      setProjectToDelete(id);
      setReason('');
      deleteProject.reset();
    },
    [deleteProject, dispatch],
  );

  const closeDeleteModal = useCallback(() => {
    dispatch(closeModal());
    setProjectToDelete(null);
    setReason('');
    deleteProject.reset();
  }, [deleteProject, dispatch]);

  const handleDeleteProject = useCallback(() => {
    if (projectToDelete === null || !canDelete) {
      return;
    }

    deleteProject.mutate(
      {
        id: projectToDelete,
      },
      {
        onSuccess: () => {
          closeDeleteModal();

          dispatch(
            showToast({
              variant: SUCCESS,
              description: t('toastSuccess'),
            }),
          );
        },

        onError: (error) => {
          dispatch(
            showToast({
              variant: ERROR,
              description: error instanceof Error ? error.message : t('toastError'),
            }),
          );
        },
      },
    );
  }, [canDelete, closeDeleteModal, deleteProject, dispatch, projectToDelete, t]);

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
