'use client';

import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>, boolean] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);

      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (item !== null) setStoredValue(JSON.parse(item));
    } catch {
    } finally {
      setHydrated(true);
    }
  }, [key]);

  const setValue: Dispatch<SetStateAction<T>> = (value) => {
    setStoredValue((prev) => {
      const valueToStore = value instanceof Function ? value(prev) : value;

      window.localStorage.setItem(key, JSON.stringify(valueToStore));

      return valueToStore;
    });
  };

  return [storedValue, setValue, hydrated];
}
