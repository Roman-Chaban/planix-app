'use client';

import type { ModalId } from './types';

import { useEffect } from 'react';

import { useLocalStorage } from '@/shared/lib/hooks';
import { useAppDispatch, useAppSelector } from '@/shared/providers/store/hooks';

import { selectIsModalOpen } from './selectors';

import { openModal } from './slice';

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
