'use client';

import type { ModalId } from './modal.types';

import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/providers/store/hooks';

import { useLocalStorage } from '@/shared/lib/hooks';

import { selectIsModalOpen } from './modal.selectorts';

import { openModal } from './modal.slice';

export const usePersistModal = (modalId: ModalId, storageKey: string) => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectIsModalOpen(modalId));

  const [storedValue, setStoredValue, hydrated] = useLocalStorage(storageKey, false);

  useEffect(() => {
    if (!hydrated || !storedValue) return;

    dispatch(openModal(modalId));
  }, [dispatch, hydrated, modalId, storedValue]);

  useEffect(() => {
    if (!hydrated) return;

    setStoredValue(isOpen);
  }, [hydrated, isOpen, setStoredValue]);
};
